import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText as GSAPSplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, GSAPSplitText)

type SplitTextProps = {
    text: string
    className?: string
    delay?: number
    duration?: number
    ease?: string
    splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
    from?: Record<string, any>
    to?: Record<string, any>
    threshold?: number
    rootMargin?: string
    textAlign?: React.CSSProperties['textAlign']
    onLetterAnimationComplete?: () => void
    hideScrollY?: number
}

const SplitText = ({
    text,
    className = '',
    delay = 100,
    duration = 0.6,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    onLetterAnimationComplete,
    hideScrollY = 50
}: SplitTextProps) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const animationCompletedRef = useRef(false)

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const el = ref.current
        if (!el || animationCompletedRef.current) {
            return
        }

        const absoluteLines = splitType === 'lines'
        if (absoluteLines) el.style.position = 'relative'

        const splitter = new GSAPSplitText(el, {
            type: splitType,
            absolute: absoluteLines,
            linesClass: 'split-line'
        })

        let targets: HTMLElement[]
        switch (splitType) {
            case 'lines':
                targets = (splitter.lines as Element[]).filter((el): el is HTMLElement => el instanceof HTMLElement)
                break
            case 'words':
                targets = (splitter.words as Element[]).filter((el): el is HTMLElement => el instanceof HTMLElement)
                break
            case 'words, chars':
                targets = [
                    ...(splitter.words as Element[]).filter((el): el is HTMLElement => el instanceof HTMLElement),
                    ...(splitter.chars as Element[]).filter((el): el is HTMLElement => el instanceof HTMLElement)
                ]
                break
            default:
                targets = (splitter.chars as Element[]).filter((el): el is HTMLElement => el instanceof HTMLElement)
        }

        if (!targets.length) {
            return
        }

        targets.forEach((t) => {
            t.style.willChange = 'transform, opacity'
        })

        const startPct = (1 - threshold) * 100
        const m = /^(-?\d+)px$/.exec(rootMargin)
        const raw = m ? parseInt(m[1], 10) : 0
        const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`
        const start = `top ${startPct}%${sign}`

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start,
                toggleActions: 'play none none none',
                once: true
            },
            smoothChildTiming: true,
            onComplete: () => {
                animationCompletedRef.current = true
                gsap.set(targets, {
                    ...to,
                    clearProps: 'willChange',
                    immediateRender: true
                })
                onLetterAnimationComplete?.()
            }
        })

        tl.set(targets, { ...from, immediateRender: false, force3D: true })
        tl.to(targets, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            force3D: true
        })

        if (hideScrollY !== undefined) {
            const fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: `${hideScrollY} top`,
                    end: `${hideScrollY + 1} top`,
                    toggleActions: 'play none none reverse',
                    fastScrollEnd: true
                }
            })

            fadeTl
                .to(el, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                })
                .reverse()

            ScrollTrigger.create({
                trigger: document.documentElement,
                start: `${hideScrollY} top`,
                end: `${hideScrollY + 1} top`,
                toggleActions: 'play none none reverse',
                onEnter: () => fadeTl.timeScale(1),
                onLeaveBack: () => fadeTl.timeScale(3).reverse()
            })
        }

        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach((t) => {
                if (
                    t.trigger === el ||
                    t.trigger === document.documentElement
                ) {
                    t.kill()
                }
            })
            gsap.killTweensOf([el, ...targets])
            splitter.revert()
        }
    }, [
        text,
        delay,
        duration,
        ease,
        splitType,
        from,
        to,
        threshold,
        rootMargin,
        onLetterAnimationComplete,
        hideScrollY
    ])

    return (
        <p
            ref={ref}
            className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
            style={{
                textAlign,
                wordWrap: 'break-word'
            }}
        >
            {text}
        </p>
    )
}

export default SplitText
