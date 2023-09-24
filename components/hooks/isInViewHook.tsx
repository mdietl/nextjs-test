import React, { useState, useEffect, useRef } from 'react'

export function useInViewPort() {
    const refs = useRef<{ [key: string]: HTMLElement }>({})
    const [elements, setElements] = useState<{
        [key: string]: { isInView: boolean }
    }>({})
    let observer: IntersectionObserver
    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const key = entry.target.getAttribute('data-inviewkey')
                console.log('DO', key, entry.isIntersecting)
                if (!key) {
                    console.warn(
                        'Encountered entry with no name. You should add data-myProperty to every element passed to the isInView hook.'
                    )
                } else {
                    if (entry.isIntersecting && !elements[key]?.isInView) {
                        setElements((prev) => {
                            return {
                                ...prev,
                                [key]: {
                                    isInView: true,
                                },
                            }
                        })
                    } else if (!entry.isIntersecting && (!elements[key] || elements[key]?.isInView === true)) {
                        setElements((prev) => ({
                            ...prev,
                            [key]: {
                                isInView: false,
                            },
                        }))
                    }
                }
            })
        }
        observer = new IntersectionObserver(observerCallback)
        console.log('CREATE OBSERVER')

        Object.values(refs.current).forEach((ref) => {
            observer.observe(ref)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const observe = (key: string, ref: HTMLElement) => {

        if (ref) {
            ref.setAttribute('data-inviewkey', key)
            // setElements((prev) => {
            //     return {
            //         ...prev,
            //         [key]: {
            //             isInView: false,
            //         },
            //     }
            // })
            refs.current[key] = ref
            console.log('CREATE ELEMENT')
            observer?.observe(ref)
        }
    }

    return { elements, observe }
}