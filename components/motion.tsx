'use client'

import { ReactNode, useEffect, useRef } from 'react'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('is-visible'); observer.unobserve(el) }
    }, { threshold: 0.08 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export function Magnetic({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => { const r=el.getBoundingClientRect(); el.style.transform=`translate3d(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px,0)` }
    const leave = () => { el.style.transform='' }
    el.addEventListener('mousemove',move); el.addEventListener('mouseleave',leave)
    return () => { el.removeEventListener('mousemove',move); el.removeEventListener('mouseleave',leave) }
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}

export function Parallax({ children, className = '', strength = 24 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref=useRef<HTMLDivElement>(null)
  useEffect(()=>{const el=ref.current;if(!el)return;let raf=0;const update=()=>{const r=el.getBoundingClientRect();const center=window.innerHeight/2;const offset=(center-(r.top+r.height/2))/window.innerHeight;el.style.setProperty('--parallax',`${offset*strength}px`);raf=0};const on=()=>{if(!raf)raf=requestAnimationFrame(update)};update();window.addEventListener('scroll',on,{passive:true});window.addEventListener('resize',on);return()=>{cancelAnimationFrame(raf);window.removeEventListener('scroll',on);window.removeEventListener('resize',on)}},[strength])
  return <div ref={ref} className={`parallax ${className}`}>{children}</div>
}
