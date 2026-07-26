import { NextResponse } from 'next/server';
import { TemplateItem, ReviewItem } from '@/components/TemplateGrid';
import { FeaturedTemplate } from '@/components/FeaturedTemplates';

export const TEMPLATES: TemplateItem[] = [

  {
    id: "influence",
    name: "Influence",
    category: "Personal",
    media: "/card-images/influence.mp4",
    type: "video",
  },
  {
    id: "talentify",
    name: "Talentify",
    category: "AI & Tech",
    media: "/card-images/talentify.png",
    type: "image",
  },
  {
    id: "merass",
    name: "Meraas",
    category: "Agency",
    media: "/card-images/merass.mp4",
    type: "video",
  },
  {
    id: "instructor",
    name: "Naomi Yoga",
    category: "Personal",
    media: "/card-images/instructor.png",
    type: "image",
  },

  {
    id: "zenna",
    name: "Zenna",
    category: "E-commerce",
    media: "/card-images/zenna.mp4",
    type: "video",
  },
  {
    id: "selene",
    name: "Selene",
    category: "SaaS",
    media: "/card-images/selene.png",
    type: "image",
  },
  {
    id: "build-for",
    name: "Nightly Insights",
    category: "SaaS",
    media: "/card-images/build-for.png",
    type: "image",
  },
  {
    id: "benefit",
    name: "Benefit Trial",
    category: "SaaS",
    media: "/card-images/benefit.png",
    type: "image",
  },

  {
    id: "agentik",
    name: "Agentik",
    category: "AI & Tech",
    media: "/card-images/agentik.png",
    type: "image",
  },
  {
    id: "gumroad",
    name: "Gumroad Creator",
    category: "E-commerce",
    media: "/card-images/gumroad.mp4",
    type: "video",
  },
  {
    id: "pricing",
    name: "Design to Convert",
    category: "Agency",
    media: "/card-images/pricing.png",
    type: "image",
  },
  {
    id: "partnr",
    name: "Partner Success",
    category: "Agency",
    media: "/card-images/partnr.png",
    type: "image",
  },

  {
    id: "cora",
    name: "Cora",
    category: "SaaS",
    media: "/card-images/cora.mp4",
    type: "video",
  },
  {
    id: "mision",
    name: "Mission Website",
    category: "E-commerce",
    media: "/card-images/mision.png",
    type: "image",
  },
  {
    id: "gym",
    name: "FitSystem",
    category: "Personal",
    media: "/card-images/gym.mp4",
    type: "video",
  },
  {
    id: "team",
    name: "Content Team",
    category: "Agency",
    media: "/card-images/team.png",
    type: "image",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    quote: "An excellent template in terms of design & customizability.",
    name: "Seyed",
    badge: null,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote: "The design is clean, easy to custmize, professional, and versatile.",
    name: "Mark",
    badge: null,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote: "Brilliant template. Super well designed and easy to customise!",
    name: "Jacob",
    badge: null,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote: "This Framer template is excellent at elevating your online presence!",
    name: "Nic",
    badge: null,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  },
];

export const FEATURED_TEMPLATES: FeaturedTemplate[] = [
  {
    id: "selene",
    name: "Selene",
    category: "AI SAAS",
    price: "$129 USD",
    media: "/card-images/card-templates/card-1.png",
    hoverMedia: "/card-images/card-templates/hover-card-1.png",
    isNew: true,
  },
  {
    id: "zenna",
    name: "Zenna",
    category: "YOGA STUDIO",
    price: "$129 USD",
    media: "/card-images/card-templates/card-2.png",
    hoverMedia: "/card-images/card-templates/hover-card-2.png",
  },
  {
    id: "traction",
    name: "Traction",
    category: "SMMA",
    price: "$129 USD",
    media: "/card-images/card-templates/card-3.png",
    hoverMedia: "/card-images/card-templates/hover-card-3.png",
  },
];

export async function GET() {
  return NextResponse.json({
    templates: TEMPLATES,
    reviews: REVIEWS,
    featuredTemplates: FEATURED_TEMPLATES
  });
}
