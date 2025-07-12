"use client"

import type React from "react"
import { useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import { createRoot } from "react-dom/client"
import { motion, Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "./animate-ui/text/gradient"
import Link from "next/link"
import { cn } from "@/lib/utils"
import IPad from "./ui/ipad"

// Register GSAP plugins
gsap.registerPlugin(InertiaPlugin)

// SVG shape components (same as before)
const ShapeComponents = [
  // Shape 1 - Orange gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100L100 150C100 177.614 122.386 200 150 200H200L200 100H150.02C177.625 99.9893 200 77.6077 200 50Z"
          fill="url(#paint1)"
        />
      </g>
      <defs>
        <linearGradient id="paint1" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF955C" />
          <stop offset="1" stopColor="#FFD699" />
        </linearGradient>
        <clipPath id="clip1">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 2 - Purple gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M146.371 34.5888C147.629 31.5563 148.272 28.3046 148.265 25.0218C148.267 20.0831 146.806 15.2545 144.066 11.1455C141.326 7.03648 137.431 3.83135 132.871 1.9347C128.311 0.038053 123.291 -0.465076 118.445 0.488832C113.6 1.44274 109.145 3.81092 105.644 7.29439L100.004 12.5471L94.4021 7.31163C89.7108 2.62604 83.3503 -0.00403591 76.7198 4.64873e-06C70.0894 0.00404521 63.7321 2.64187 59.0465 7.33318C54.3609 12.0245 51.7308 18.385 51.7348 25.0155C51.7389 31.6459 54.3767 38.0032 59.068 42.6888L97.5477 81.7374C97.8685 82.0631 98.2508 82.3217 98.6725 82.4983C99.0941 82.6748 99.5467 82.7658 100.004 82.7658C100.461 82.7658 100.914 82.6748 101.335 82.4983C101.757 82.3217 102.139 82.0631 102.46 81.7374L140.94 42.6888C143.268 40.3744 145.114 37.6213 146.371 34.5888ZM53.6286 165.411C52.3712 168.444 51.7276 171.695 51.7349 174.978C51.7327 179.917 53.1938 184.746 55.9336 188.855C58.6735 192.964 62.5693 196.169 67.1293 198.065C71.6892 199.962 76.7089 200.465 81.5546 199.511C86.4003 198.557 90.8547 196.189 94.3556 192.706L99.9961 187.453L105.598 192.688C110.289 197.374 116.65 200.004 123.28 200C129.911 199.996 136.268 197.358 140.954 192.667C145.639 187.976 148.269 181.615 148.265 174.985C148.261 168.354 145.623 161.997 140.932 157.311L102.452 118.263C102.132 117.937 101.749 117.678 101.327 117.502C100.906 117.325 100.453 117.234 99.9961 117.234C99.539 117.234 99.0864 117.325 98.6647 117.502C98.2431 117.678 97.8607 117.937 97.54 118.263L59.0603 157.311C56.7321 159.626 54.8859 162.379 53.6286 165.411ZM174.978 148.266C171.695 148.273 168.444 147.629 165.411 146.372C162.379 145.115 159.626 143.268 157.311 140.94L118.263 102.461C117.937 102.14 117.678 101.757 117.502 101.336C117.325 100.914 117.234 100.462 117.234 100.004C117.234 99.5473 117.325 99.0947 117.502 98.6731C117.678 98.2514 117.937 97.869 118.263 97.5483L157.311 59.0686C161.997 54.3773 168.354 51.7394 174.985 51.7354C181.615 51.7314 187.976 54.3614 192.667 59.047C197.358 63.7326 199.996 70.0899 200 76.7204C200.004 83.3509 197.374 89.7114 192.688 94.4027L187.453 100.004L192.706 105.645C196.189 109.146 198.557 113.6 199.511 118.446C200.465 123.292 199.962 128.311 198.065 132.871C196.169 137.431 192.964 141.327 188.855 144.067C184.746 146.807 179.917 148.268 174.978 148.266ZM34.5888 53.628C31.5563 52.3706 28.3046 51.727 25.0218 51.7343C20.0831 51.7321 15.2544 53.1932 11.1455 55.933C7.03647 58.6729 3.83134 62.5687 1.9347 67.1287C0.0380524 71.6887 -0.465076 76.7083 0.488831 81.554C1.44274 86.3997 3.81091 90.8542 7.29439 94.355L12.5471 99.9956L7.31163 105.597C2.62603 110.289 -0.00403599 116.649 4.64892e-06 123.28C0.00404529 129.91 2.64186 136.267 7.33317 140.953C12.0245 145.639 18.385 148.269 25.0155 148.265C31.6459 148.261 38.0032 145.623 42.6888 140.931L81.7373 102.452C82.063 102.131 82.3217 101.749 82.4982 101.327C82.6748 100.905 82.7657 100.453 82.7657 99.9955C82.7657 99.5384 82.6748 99.0858 82.4982 98.6642C82.3217 98.2425 82.063 97.8602 81.7373 97.5394L42.6888 59.0597C40.3744 56.7315 37.6213 54.8853 34.5888 53.628Z"
          fill="url(#paint2)"
        />
      </g>
      <defs>
        <linearGradient id="paint2" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <clipPath id="clip2">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 3 - Teal gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 -4.37114e-06C155.228 -6.78525e-06 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 5.67237e-06 155.228 3.25826e-06 100C8.44143e-07 44.7715 44.7715 -1.95703e-06 100 -4.37114e-06ZM100 -4.37114e-06C138.108 -6.03688e-06 169 30.8923 169 69C169 107.108 138.108 138 100 138C61.8924 138 31 107.108 31 69C31 30.8923 61.8924 -2.7054e-06 100 -4.37114e-06ZM132 69C132 51.3269 117.673 37 100 37C82.3269 37 68 51.3269 68 69C68 86.6731 82.3269 101 100 101C117.673 101 132 86.6731 132 69Z"
          fill="url(#paint3)"
        />
      </g>
      <defs>
        <linearGradient id="paint3" x1="-9.344e-06" y1="23" x2="152.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#67E8F9" />
        </linearGradient>
        <clipPath id="clip3">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 4 - Pink gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip4)">
        <path
          d="M100 200C91.6667 200 84.7222 197.309 79.1667 191.927C73.6111 186.545 70.8333 180.035 70.8333 172.396C70.8333 168.056 71.7014 164.149 73.4375 160.677C75.1736 157.205 78.2118 153.385 82.5521 149.219C87.066 145.052 90.625 141.146 93.2292 137.5C96.0069 133.681 97.3958 130.382 97.3958 127.604V118.229C93.5764 117.361 90.191 115.625 87.2396 113.021C84.4618 110.243 82.6389 106.944 81.7708 103.125H72.3958C69.4444 103.125 65.9722 104.514 61.9792 107.292C57.9861 110.069 54.1667 113.455 50.5208 117.448C46.875 121.441 43.2292 124.392 39.5833 126.302C36.1111 128.212 32.1181 129.167 27.6042 129.167C19.7917 129.167 13.1944 126.389 7.8125 120.833C2.60417 115.278 0 108.333 0 100C0 91.6667 2.60417 84.7222 7.8125 79.1667C13.1944 73.6111 19.7917 70.8333 27.6042 70.8333C34.8958 70.8333 41.1458 73.4375 46.3542 78.6458C51.5625 83.8542 56.25 88.2812 60.4167 91.9271C64.5833 95.5729 68.5764 97.3958 72.3958 97.3958H81.7708C82.6389 93.4028 84.4618 90.1041 87.2396 87.5C90.191 84.7222 93.5764 82.9861 97.3958 82.2916V72.9167C97.3958 68.4028 93.9236 62.6736 86.9792 55.7292L81.5104 50.2604C74.3924 43.1424 70.8333 35.5903 70.8333 27.6042C70.8333 19.7917 73.6111 13.2812 79.1667 8.07291C84.8958 2.69097 91.8403 0 100 0C108.333 0 115.278 2.69097 120.833 8.07291C126.389 13.4549 129.167 19.9653 129.167 27.6042C129.167 36.4583 124.826 44.7917 116.146 52.6042C107.465 60.5903 103.125 67.3611 103.125 72.9167V82.2916C107.118 82.9861 110.417 84.7222 113.021 87.5C115.799 90.1041 117.535 93.4028 118.229 97.3958H127.604C133.507 97.3958 140.278 92.9687 147.917 84.1146C155.729 75.2604 163.889 70.8333 172.396 70.8333C180.208 70.8333 186.719 73.6979 191.927 79.4271C197.309 84.9826 200 91.8403 200 100C200 108.333 197.309 115.278 191.927 120.833C186.545 126.389 180.035 129.167 172.396 129.167C165.104 129.167 158.941 126.649 153.906 121.615C148.872 116.58 144.184 112.24 139.844 108.594C135.503 104.948 131.424 103.125 127.604 103.125H118.229C116.84 111.458 111.806 116.493 103.125 118.229V127.604C103.125 132.812 107.465 139.497 116.146 147.656C124.826 155.816 129.167 164.062 129.167 172.396C129.167 180.208 126.302 186.719 120.573 191.927C115.017 197.309 108.16 200 100 200Z"
          fill="url(#paint4)"
        />
      </g>
      <defs>
        <linearGradient id="paint4" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse">
          <stop offset="0.0509862" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F9A8D4" />
        </linearGradient>
        <clipPath id="clip4">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 5 - Green gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M199.06 140.014C199.605 145.51 195.075 150 189.552 150H153.302C147.779 150 143.42 145.463 142.173 140.083C137.681 120.698 120.304 106.25 99.5522 106.25C78.8007 106.25 61.4237 120.698 56.931 140.083C55.6841 145.463 51.325 150 45.8022 150H9.55217C4.02932 150 -0.500355 145.51 0.0445342 140.014C5.0553 89.4741 47.6939 50 99.5522 50C151.41 50 194.049 89.4741 199.06 140.014Z"
        fill="url(#paint5)"
      />
      <defs>
        <linearGradient id="paint5" x1="156.795" y1="66" x2="111.742" y2="157.282" gradientUnits="userSpaceOnUse">
          <stop offset="0.0509862" stopColor="#10B981" />
          <stop offset="1" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // Shape 6 - Blue gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip6)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.3 75.4739L149.353 42.4212C151.625 40.1498 155.307 40.1498 157.579 42.4212C159.85 44.6927 159.85 48.3754 157.579 50.6468L124.526 83.6996C131.986 82.0231 140.696 81.0606 150 81.0606C177.614 81.0606 200 89.5401 200 100C200 110.46 177.614 118.939 150 118.939C140.696 118.939 131.986 117.977 124.526 116.3L157.579 149.353C159.85 151.625 159.85 155.307 157.579 157.579C155.307 159.85 151.625 159.85 149.353 157.579L116.3 124.526C117.977 131.986 118.939 140.697 118.939 150C118.939 177.614 110.46 200 100 200C89.5401 200 81.0606 177.614 81.0606 150C81.0606 140.696 82.0231 131.986 83.6996 124.526L50.6468 157.579C48.3754 159.85 44.6927 159.85 42.4213 157.579C40.1499 155.307 40.1499 151.625 42.4213 149.353L75.474 116.3C68.0135 117.977 59.3035 118.939 50 118.939C22.3858 118.939 0 110.46 0 100C0 89.5401 22.3858 81.0606 50 81.0606C59.3035 81.0606 68.0136 82.0231 75.474 83.6996L42.4213 50.6469C40.1499 48.3755 40.1499 44.6928 42.4213 42.4213C44.6927 40.1499 48.3754 40.1499 50.6468 42.4213L83.6996 75.4741C82.0231 68.0136 81.0606 59.3036 81.0606 50C81.0606 22.3858 89.5401 0 100 0C110.46 0 118.939 22.3858 118.939 50C118.939 59.3035 117.977 68.0135 116.3 75.4739Z"
          fill="url(#paint6)"
        />
      </g>
      <defs>
        <linearGradient id="paint6" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#93C5FD" />
        </linearGradient>
        <clipPath id="clip6">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 7 - Yellow gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip7)">
        <path
          d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
          fill="url(#paint7)"
        />
      </g>
      <defs>
        <linearGradient id="paint7" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#FDE047" />
        </linearGradient>
        <clipPath id="clip7">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 8 - Red gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip8)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M127.233 110.308C145.856 117.358 170.923 116.073 186.883 107.25L200 100L186.883 92.7498C170.923 83.9274 145.857 82.6428 127.233 89.6916L113.267 94.9781C113.18 94.6967 113.075 94.4251 112.972 94.1516L126.546 88.0321C144.7 79.8479 161.515 61.2149 166.563 43.6907L170.711 29.2888L156.309 33.4367C138.785 38.4842 120.152 55.3 111.967 73.4535L106.057 86.5642C105.784 86.4316 105.511 86.3 105.229 86.1851L110.308 72.7665C117.357 54.1433 116.072 29.0767 107.25 13.1163L100 0L92.7498 13.1167C83.9274 29.0772 82.6428 54.1433 89.6916 72.767L94.7707 86.1856C94.4884 86.3005 94.2154 86.4321 93.9428 86.5646L88.0321 73.4539C79.8479 55.3005 61.2149 38.4846 43.6907 33.4372L29.2888 29.2893L33.4367 43.6912C38.4842 61.2149 55.3 79.8484 73.4535 88.0326L87.0274 94.1521C86.9247 94.4256 86.8191 94.6972 86.733 94.9786L72.7665 89.6921C54.1433 82.6428 29.0767 83.9279 13.1163 92.7502L0 100L13.1167 107.25C29.0772 116.073 54.1433 117.358 72.767 110.308L87.3861 104.775C87.5014 105.027 87.6172 105.28 87.747 105.524L73.454 111.968C55.3005 120.152 38.4847 138.785 33.4372 156.309L29.2893 170.711L43.6912 166.563C61.2149 161.516 79.8484 144.7 88.0326 126.547L94.6656 111.834C94.9107 111.936 95.1651 112.02 95.4172 112.109L89.6921 127.234C82.6428 145.857 83.9279 170.924 92.7502 186.884L100 200.001L107.251 186.884C116.073 170.924 117.358 145.858 110.309 127.234L104.583 112.108C104.835 112.02 105.09 111.936 105.335 111.833L111.968 126.546C120.152 144.7 138.785 161.515 156.309 166.563L170.711 170.711L166.563 156.309C161.516 138.785 144.7 120.152 126.547 111.967L112.253 105.524C112.383 105.28 112.499 105.027 112.614 104.774L127.233 110.308Z"
          fill="url(#paint8)"
        />
      </g>
      <defs>
        <linearGradient id="paint8" x1="177" y1="-9.23653e-06" x2="39.4993" y2="152.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="#FCA5A5" />
        </linearGradient>
        <clipPath id="clip8">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  // Shape 9 - Violet gradient
  () => (
    <svg width="64" height="64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip9)">
        <path
          d="M99.6778 105.287C99.6778 -81.6924 145.108 21.3021 98.3534 102.278C145.098 21.3021 257.091 9.12898 95.091 102.638C257.052 9.14845 190.528 99.9892 97.0387 99.9892C190.528 99.9892 257.062 190.859 95.091 97.3404C257.052 190.83 145.108 178.686 98.3534 97.7007C145.098 178.686 99.6778 281.759 99.6778 94.7012C99.6778 281.681 54.2379 178.686 100.993 97.7007C54.2477 178.686 -57.7451 190.859 104.255 97.3404C-57.7062 190.83 -57.7159 9.12898 104.255 102.638C-57.7062 9.14845 54.2379 21.3021 100.993 102.278C54.2379 21.3021 99.6778 -81.7411 99.6778 105.287Z"
          fill="url(#paint9)"
        />
      </g>
      <defs>
        <linearGradient id="paint9" x1="153.535" y1="32" x2="40.1477" y2="140.085" gradientUnits="userSpaceOnUse">
          <stop offset="0.0509862" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#C4B5FD" />
        </linearGradient>
        <clipPath id="clip9">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)


  // Animation state
  const mousePos = useRef({ x: 0, y: 0 })
  const lastMousePos = useRef({ x: 0, y: 0 })
  const cachedMousePos = useRef({ x: 0, y: 0 })
  const index = useRef(0)
  const gap = 150

  const animateShape = useCallback(() => {
    const wrappedIndex = index.current % ShapeComponents.length
    const shape = containerRef.current?.children[wrappedIndex] as HTMLElement

    if (!shape) return

    gsap.killTweensOf(shape)

    gsap.set(shape, {
      opacity: 0,
      x: cachedMousePos.current.x,
      y: cachedMousePos.current.y,
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      rotation: gsap.utils.random(-180, 180)
    })

    gsap.timeline({ defaults: { ease: "expo.out", duration: 1 } })
      .to(shape, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
        ease: "back.out",
        rotation: 0
      }, 0)
      .to(shape, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        xPercent: -50,
        yPercent: -50
      }, 0)
      .to(shape, {
        rotation: gsap.utils.random([-600, 600, -300, 300]),
        ease: "power3.in"
      }, 0.1)
      .to(shape, {
        opacity: 0,
        ease: "power1.in",
        duration: 0.8
      }, 0.4)
      .to(shape, {
        y: "100vh",
        ease: "power3.inOut"
      }, 0.4)

    index.current++
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    // Create and append all shapes
    const shapes = ShapeComponents.map((ShapeComponent) => {
      const shape = document.createElement("div")
      shape.className = "flair absolute pointer-events-none will-change-transform"
      shape.style.width = "120px"
      shape.style.opacity = "0"
      containerRef.current?.appendChild(shape)

      // Render the SVG component
      const root = createRoot(shape)
      root.render(<ShapeComponent />)

      return shape
    },[animateShape])

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation ticker
    const ticker = gsap.ticker.add(() => {
      const travelDistance = Math.hypot(
        lastMousePos.current.x - mousePos.current.x,
        lastMousePos.current.y - mousePos.current.y
      )

      // Interpolate cached mouse position
      cachedMousePos.current.x = gsap.utils.interpolate(
        cachedMousePos.current.x || mousePos.current.x,
        mousePos.current.x,
        0.1
      )
      cachedMousePos.current.y = gsap.utils.interpolate(
        cachedMousePos.current.y || mousePos.current.y,
        mousePos.current.y,
        0.1
      )

      if (travelDistance > gap) {
        animateShape()
        lastMousePos.current = { ...mousePos.current }
      }
    })

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      gsap.ticker.remove(ticker)
      shapes.forEach(shape => {
        const root = (shape as unknown as { _reactRootContainer?: unknown })._reactRootContainer
        if (root && typeof (root as { unmount?: unknown }).unmount === 'function') {
          (root as { unmount: () => void }).unmount()
        }
        shape.remove()
      })
    }
  }, [animateShape])

  // --- Your hero section code starts here ---
  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-40 bg-white dark:bg-gray-950"
    >
      {/* Animated shapes background */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* --- Your hero section content below is untouched --- */}
      <div
        className={cn(
          "absolute inset-0 mt-12",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-gray-950 mt-12"></div>

      <div className="relative z-20 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.div variants={item} className="mb-2">
            <h1 className="font-subheading inline-block rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 text-sm md:text-lg mb-4ee">
              Web Development & SaaS Experts
            </h1>
          </motion.div>
          {/* <motion.p
            variants={item}
            className="font-body text-xl md:text-[1.25rem] lg:text-[1.5rem] leading-8 text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Wewise Labs transforms ideas into smooth, high-impact SaaS products and websites that actually help your business grow and your users stick around.
          </motion.p> */}
          <motion.h1
            variants={item}
            className="font-subheading text-5xl md:text-[5rem] lg:text-[7rem] font-bold tracking-tight leading-[1.5] mb-8"
          >
            <span className="dark:text-white">INNOVATING</span>
            <span className="inline-block ml-8 ">
              <GradientText text="Future" className="font-arizonia font-bold text-8xl md:text-[7rem] lg:text-[9rem]  grainy-texture text-clip"/>
            </span>{" "}
            <span className="relative font-subheading font-bold dark:text-white">WISELY</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="font-body text-xl md:text-[1.25rem] lg:text-[1.5rem] leading-8 text-gray-700 dark:text-gray-300 mb-8 max-w-5xl mx-auto"
          >
            Wewise Labs transforms ideas into smooth, high-impact AI powered SaaS products and websites that actually help your business grow and your users stick around.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mt-18">
            <Link href="#contact">
              <Button
                size="lg"
                className="font-subheading tracking-wider rounded-full border border-white bg-black text-white dark:border-white hover:bg-gray-800 px-8 py-6 text-base"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="font-body rounded-full border-black hover:bg-gray-100 dark:hover:bg-gray-300 px-8 py-6 text-base"
              >
                Our Services
              </Button>
            </Link>
          </motion.div>

          <IPad/>

        </motion.div>
      </div>
    </div>
  )
}
