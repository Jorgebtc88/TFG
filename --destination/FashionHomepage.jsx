"use client";
import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { CategoriesSection } from "./CategoriesSection";
import { PromotionBanner } from "./PromotionBanner";
import { NewsletterSection } from "./NewsletterSection";
import { Footer } from "./Footer";

export default function FashionHomepage() {
  return (
    <div className="box-border p-0 m-0 text-zinc-800">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <PromotionBanner />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
