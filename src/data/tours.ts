import { Tour } from "./types";

// Peru Tours
import { peru1 } from "./peru/peru-1";
import { peru2 } from "./peru/peru-2";
import { peru3 } from "./peru/peru-3";
import { peru4 } from "./peru/peru-4";
import { peru5 } from "./peru/peru-5";
import { peru10 } from "./peru/peru-10";
import { peru11 } from "./peru/peru-11";
import { peru12 } from "./peru/peru-12";
import { peru13 } from "./peru/peru-13";

// Ecuador Tours
import { ecuador6 } from "./ecuador/ecuador-6";
import { ecuador8 } from "./ecuador/ecuador-8";
import { ecuador9 } from "./ecuador/ecuador-9";

// Bolivia Tours
import { bolivia7 } from "./bolivia/bolivia-7";
import { bolivia14 } from "./bolivia/bolivia-14";
import { bolivia15 } from "./bolivia/bolivia-15";

// Chile Tours
import { chile16 } from "./chile/chile-16";
import { chile17 } from "./chile/chile-17";
import { chile18 } from "./chile/chile-18";

export { type Tour } from "./types";

export const tours: Tour[] = [
  peru1, peru2, peru3, peru4, peru5,
  ecuador6,
  bolivia7,
  ecuador8, ecuador9,
  peru10, peru11, peru12, peru13,
  bolivia14, bolivia15,
  chile16, chile17, chile18
];

export const destinations = [
  { name: "Peru", description: "Machu Picchu, Cusco, Amazon & more", tourCount: 9 },
  { name: "Bolivia", description: "Uyuni Salt Flats & La Paz", tourCount: 3 },
  { name: "Chile", description: "Atacama Desert & Patagonia", tourCount: 3 },
  { name: "Ecuador", description: "Galápagos Islands & Quito", tourCount: 3 },
];

export const testimonials = [
  {
    name: "Hector B",
    location: "Written on April 4, 2024",
    title: "Excellent tour",
    text: "Everything was very organized, the guides were excellent and had a great attitude. They picked us up at the indicated time; it was an incredible trip. 100% recommended.",
    rating: 5,
    response: "Thank you so much for your comment! We are glad to hear that you enjoyed an incredible trip and that our organization and guides met your expectations. (Response on September 16, 2024)"
  },
  {
    name: "Dante P",
    location: "Written on November 9, 2022",
    title: "Family trip",
    text: "Excellent service, professional and punctual in all tours. Each tour was accompanied by very good tour guides, both in explanation and attention. All of this made the trip very pleasant. Highly recommended!!!.",
    rating: 5,
    response: "Thank you very much for your kind review! It makes us very happy to know that your family trip was pleasant and that you appreciated the punctuality and quality of our guides. (Response on September 16, 2024)"
  },
  {
    name: "Paul G",
    location: "Written on September 3, 2022",
    title: "They fulfill everything they offer",
    text: "Everything was excellent with Leading Peru Travel. Highly recommended. They took us to Machu Picchu, everything within the schedules and services offered.",
    rating: 5,
    response: "Thank you very much for your excellent review! We strive to fulfill every promise and are glad your experience in Machu Picchu was perfect. (Response on September 16, 2024)"
  },
  {
    name: "olivia d",
    location: "Written on June 20, 2018",
    title: "An agency very close to the client",
    text: "We traveled as a family and found that they treated us more like friends than clients... Gladys would always respond immediately, politely... A perfect agency. My criteria are simple: if you are on vacation and feel pressured by the agency, then it's not a vacation. With Leading Peru this will never happen...",
    rating: 5,
    response: "Thank you very much for your kind words! We pride ourselves on the personal touch and treating our guests like family. (Response on September 16, 2024)"
  },
  {
    name: "Leah C",
    location: "Written on June 12, 2018",
    title: "One day trip to Machu Picchu",
    text: "We used them for a one-day trip to Machu Picchu... The whole process went very well... The only downside was our guide was not there when we got off... but it was sorted and we were glad it was. Once with the English-speaking guide... everything was really great...",
    rating: 4,
    response: "Thank you so much for your detailed review! We appreciate your honesty and are glad that despite the initial guide hiccup, the rest of your experience was great. (Response on September 16, 2024)"
  },
];
