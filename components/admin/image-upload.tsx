'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Props={value:string;onChange:(value:string)=>void;folder:string}
export default function ImageUpload({value,onChange,folder}:Props){
 const[busy,setBusy]=useState(false),[error,setError]=useState('')
 async function upload(file:File){
  if(!file.type.startsWith('image/')){setError('Please choose an image file.');return}
  if(file.size>8*1024*1024){setError('Images must be 8 MB or smaller.');return}
  setBusy(true);setError('');const s=createClient();const ext=file.name.split('.').pop()?.toLowerCase()||'png';const path=`${folder}/${crypto.randomUUID()}.${ext}`
  const{error:e}=await s.storage.from('site-media').upload(path,file,{upsert:false,contentType:file.type})
  if(e){setError(e.message);setBusy(false);return}
  onChange(s.storage.from('site-media').getPublicUrl(path).data.publicUrl);setBusy(false)
 }
 return <div className="imageUpload"><label>Image<input type="file" accept="image/*" disabled={busy} onChange={e=>{const f=e.target.files?.[0];if(f)upload(f)}}/></label>{value&&<div className="imagePreview"><img src={value} alt="Preview"/><button type="button" className="button" onClick={()=>onChange('')}>Remove</button></div>}{error&&<p className="formError">{error}</p>}</div>
}
