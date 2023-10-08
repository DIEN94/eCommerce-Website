import React, { FC, useState } from "react";
import heart from 'assets/CardOfProduct/frames/Heart.webp'
import compare from 'assets/CardOfProduct/frames/Compare.webp'
import share from 'assets/CardOfProduct/frames/Share.webp'


export type Keys = "share" | "compare" | "like"

export const hoverConfig: Array<{key: Keys, src:string, text:string}> = [
    { key: "share",src: share, text:"Share"}, 
    { key: "compare",src: compare, text:"Compare"}, 
    { key: "like", src: heart, text:"Like"}, 
]