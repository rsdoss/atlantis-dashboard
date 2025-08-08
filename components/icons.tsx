import * as React from 'react'
import { SVGProps } from 'react'

export const WaterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 3c0 0-7 8-7 12a7 7 0 1 0 14 0C19 11 12 3 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3 5h18M6 12h12M9 19h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="5" r="2" fill="currentColor"/>
    <circle cx="16" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="19" r="2" fill="currentColor"/>
  </svg>
)

export const PumpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 14h9a3 3 0 0 0 0-6H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2" y="10" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const StructureIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="9" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 9l9-5 9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)
