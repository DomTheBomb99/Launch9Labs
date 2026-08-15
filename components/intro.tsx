'use client'
import {useEffect,useState} from 'react'
import Launch9Logo from './Launch9Logo'

export default function Intro(){
  const [show,setShow]=useState(true)
  useEffect(()=>{
    document.body.classList.add('intro-active')
    const t=setTimeout(()=>{setShow(false);document.body.classList.remove('intro-active')},4700)
    return()=>{clearTimeout(t);document.body.classList.remove('intro-active')}
  },[])
  if(!show)return null
  return <div className="introV4" aria-hidden="true">
    <div className="introV4World">
      <div className="introV4Grid"/>
      <div className="introV4Glow introV4GlowA"/>
      <div className="introV4Glow introV4GlowB"/>
      <div className="introV4Streak introV4StreakA"/>
      <div className="introV4Streak introV4StreakB"/>
      <div className="introV4Line"/>
      <div className="introV4Orbit introV4OrbitA"/>
      <div className="introV4Orbit introV4OrbitB"/>
    </div>
    <div className="introV4Curtain"/>
    <div className="introV4LogoWrap">
      <Launch9Logo className="introV4Logo"/>
      <div className="introV4Impact"/>
    </div>
    <div className="introV4Label"><span>LAUNCH9 LABS</span><i>INDEPENDENT SOFTWARE STUDIO</i></div>
    <div className="introV4PortalRing"/>
    <div className="introV4Noise"/>
    <Launch9Logo className="introV4Landing"/>
  </div>
}
