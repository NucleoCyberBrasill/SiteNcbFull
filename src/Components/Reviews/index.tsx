import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import reviews from "./reviews.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import AOS from "aos";
export function Reviews() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section className="mb-30 justify-center" data-aos="fade-up">
      <h1 className="text-3xl text-center mt-2">Depoimentos</h1>
      <div className="max-w-5xl mx-auto rounded-sm">
        <Carousel className="cursor-grab px-5 ">
          <CarouselContent
            className="p-2 gap-2 m-2
                max-w-xs "
          >
            {reviews.map((review) => {
              return (
                <CarouselItem>
                  <Card className="border border-[var(--color-primary-self)] bg-[var(--color-bg-self)] text-[var(--color-text-self)] hover:border-[var(--color-accent-hover-self)] hover:scale-106 select-none">
                    <CardHeader className="flex">
                      <img
                        src={review.avatar}
                        alt={`${review.name}+" avatar"`}
                      />
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{review.review}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          {/* <CarouselPrevious className="bg-purple-600 text-white hover:bg-purple-700" />
        <CarouselNext className="bg-purple-600 text-white hover:bg-purple-700" /> */}
        </Carousel>
      </div>
    </section>
  );
}
