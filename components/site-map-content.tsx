"use client"

import React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Briefcase,
  FileText,
  Settings,
  Mail,
  Info,
  Code,
  Layers,
  FileCode2,
  User,
  MessageSquare,
  FileQuestion,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TreeProps {
  data: TreeNode[]
  level?: number
}

interface TreeNode {
  id: string
  name: string
  icon?: React.ReactNode
  children?: TreeNode[]
  url?: string
  isNew?: boolean
}

const siteMapData: TreeNode[] = [
  {
    id: "home",
    name: "Home",
    icon: <Home className="h-4 w-4" />,
    url: "/",
    children: [
      {
        id: "hero",
        name: "Hero Section",
        icon: <FileText className="h-4 w-4" />,
        url: "/#hero",
      },
      {
        id: "services",
        name: "Services",
        icon: <Settings className="h-4 w-4" />,
        url: "/#services",
        children: [
          {
            id: "saas",
            name: "SaaS Development",
            icon: <Code className="h-4 w-4" />,
            url: "/#services",
          },
          {
            id: "web",
            name: "Web Development",
            icon: <FileCode2 className="h-4 w-4" />,
            url: "/#services",
          },
          {
            id: "backend",
            name: "Backend Development",
            icon: <Layers className="h-4 w-4" />,
            url: "/#services",
          },
        ],
      },
      {
        id: "why-choose-us",
        name: "Why Choose Us",
        icon: <Info className="h-4 w-4" />,
        url: "/#why-choose-us",
      },
      {
        id: "process",
        name: "Our Process",
        icon: <Layers className="h-4 w-4" />,
        url: "/#process",
      },
      {
        id: "technologies",
        name: "Technologies",
        icon: <Code className="h-4 w-4" />,
        url: "/#technologies",
      },
      {
        id: "projects",
        name: "Projects",
        icon: <Briefcase className="h-4 w-4" />,
        url: "/#projects",
        isNew: true,
      },
      {
        id: "testimonials",
        name: "Testimonials",
        icon: <MessageSquare className="h-4 w-4" />,
        url: "/#testimonials",
      },
      {
        id: "team",
        name: "Team",
        icon: <Users className="h-4 w-4" />,
        url: "/#team",
      },
      {
        id: "contact",
        name: "Contact",
        icon: <Mail className="h-4 w-4" />,
        url: "/#contact",
      },
    ],
  },
  {
    id: "about",
    name: "About",
    icon: <Info className="h-4 w-4" />,
    url: "/about",
    children: [
      {
        id: "mission",
        name: "Our Mission",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "vision",
        name: "Our Vision",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        id: "team-full",
        name: "Team",
        icon: <Users className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "services-page",
    name: "Services",
    icon: <Settings className="h-4 w-4" />,
    url: "/services",
    children: [
      {
        id: "saas-dev",
        name: "SaaS Development",
        icon: <Code className="h-4 w-4" />,
      },
      {
        id: "web-dev",
        name: "Web Development",
        icon: <FileCode2 className="h-4 w-4" />,
      },
      {
        id: "mobile-dev",
        name: "Mobile Development",
        icon: <FileCode2 className="h-4 w-4" />,
      },
      {
        id: "backend-dev",
        name: "Backend Development",
        icon: <Layers className="h-4 w-4" />,
      },
      {
        id: "ui-ux",
        name: "UI/UX Design",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
  },
  {
    id: "projects-page",
    name: "Projects",
    icon: <Briefcase className="h-4 w-4" />,
    url: "/projects",
  },
  {
    id: "blog",
    name: "Blog",
    icon: <FileText className="h-4 w-4" />,
    url: "/blog",
    isNew: true,
  },
  {
    id: "careers",
    name: "Careers",
    icon: <User className="h-4 w-4" />,
    url: "/careers",
  },
  {
    id: "faq",
    name: "FAQ",
    icon: <FileQuestion className="h-4 w-4" />,
    url: "/faq",
  },
  {
    id: "contact-page",
    name: "Contact",
    icon: <Mail className="h-4 w-4" />,
    url: "/contact",
  },
  {
    id: "sitemap",
    name: "Site Map",
    icon: <FileText className="h-4 w-4" />,
    url: "/sitemap",
  },
]

export function SiteMapContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <p className="text-gray-600 mb-8">
          Use this site map to navigate through our website structure and find the information you need quickly.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 border rounded-lg p-6 bg-white">
        <Tree data={siteMapData} />
      </div>
    </div>
  )
}

function Tree({ data, level = 0 }: TreeProps) {
  return (
    <ul className={cn("space-y-1", level > 0 && "pl-6 pt-1")}>
      {data.map((item) => (
        <TreeItem key={item.id} item={item} level={level} />
      ))}
    </ul>
  )
}

interface TreeItemProps {
  item: TreeNode
  level: number
}

function TreeItem({ item, level }: TreeItemProps) {
  const [isOpen, setIsOpen] = React.useState(level === 0)

  const handleToggle = () => {
    if (item.children?.length) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <li className="select-none">
      <div
        className={cn(
          "flex items-center py-2 px-2 rounded-md hover:bg-gray-100 cursor-pointer",
          item.url && "transition-colors",
        )}
        onClick={handleToggle}
      >
        {item.children?.length ? (
          <button className="mr-1 h-4 w-4 shrink-0 text-gray-500">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        ) : (
          <span className="mr-1 h-4 w-4" />
        )}
        <span className="mr-2 shrink-0 text-gray-500">{item.icon}</span>
        {item.url ? (
          <Link href={item.url} className="flex-grow hover:underline">
            {item.name}
          </Link>
        ) : (
          <span className="flex-grow">{item.name}</span>
        )}
        {item.isNew && (
          <Badge variant="outline" className="ml-2 bg-black text-white border-black text-xs">
            New
          </Badge>
        )}
      </div>
      {isOpen && item.children?.length ? <Tree data={item.children} level={level + 1} /> : null}
    </li>
  )
}
