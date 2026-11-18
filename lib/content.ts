export type Item = [title: string, text: string];
export type Group = { id: string; label: string; title: string; intro: string; items: Item[] };

export const site = {
  phone: "470-416-5544",
  phoneHref: "tel:+14704165544",
  email: "Kaurahealthcare@gmail.com",
  address: ["2311 Temple View Court", "Snellville, GA 30078"],
};

export const counties = ["Barrow", "Cobb", "DeKalb", "Douglas", "Forsyth", "Fulton", "Gwinnett", "Henry", "Rockdale", "Walton"];

export const services: { title: string; text: string; icon: string }[] = [
  { title: "Personal care", icon: "M20.8 5.6a5.2 5.2 0 00-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 00-7.4 7.4L12 21.8l8.8-8.8a5.2 5.2 0 000-7.4z", text: "Respectful help with bathing, dressing, grooming, toileting, mobility and other daily routines that protect comfort and dignity." },
  { title: "Companion and sitter", icon: "M9 5a3.2 3.2 0 100 6.4A3.2 3.2 0 009 5zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17 14c2.5 0 4.5 2 4.5 5", text: "Friendly company, conversation and encouragement that keep clients engaged, connected and cheerful through the day." },
  { title: "Respite care", icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2", text: "Temporary relief for family caregivers, so you can rest, run errands or recharge knowing your loved one is in good hands." },
  { title: "Transportation", icon: "M5 17H3v-5l2-5h11l3 5h2v5h-2M5 12h14M8 15a2 2 0 100 4 2 2 0 000-4zM16 15a2 2 0 100 4 2 2 0 000-4z", text: "Rides to doctor's appointments, prescription pick-up and shopping, along with light housekeeping and meal help at home." },
];

export const groups: Group[] = [
  {
    id: "children", label: "Children", title: "Pediatric personal support",
    intro: "We help eligible children with their daily care needs while promoting dignity, comfort, independence and well-being. We work with parents and families to understand each child's needs, routines and preferences, and support them with patience, kindness and respect.",
    items: [
      ["Personal hygiene", "support with bathing, grooming, dressing and other personal care."],
      ["Daily living activities", "help with age-appropriate routines, based on each child's needs."],
      ["Mealtime assistance", "support with eating and drinking, as appropriate to the care plan."],
      ["Mobility support", "help with safe movement and positioning, as appropriate."],
      ["Routine and comfort", "helping children keep familiar routines in a supportive home."],
      ["Family-centered care", "working with parents and caregivers for consistent, respectful support."],
    ],
  },
  {
    id: "teenagers", label: "Teenagers", title: "Personal support care for teenagers",
    intro: "The teenage years are an important stage of growth and self-discovery. Some teenagers need extra help with daily living because of medical conditions, developmental disabilities or physical limitations. We provide respectful, individualized care that promotes independence, builds confidence and protects each teenager's privacy and dignity.",
    items: [
      ["Personal hygiene", "help with bathing, grooming, dressing and cleanliness."],
      ["Daily living activities", "support with everyday routines and age-appropriate activities."],
      ["Meal assistance", "help with meal preparation and eating, based on individual needs."],
      ["Mobility assistance", "support with safe movement, positioning and transfers."],
      ["Personal development", "encouragement of independence, self-confidence and daily living skills."],
      ["Companionship", "positive interaction, encouragement and emotional support."],
      ["Family support", "working closely with parents and guardians to keep care consistent."],
    ],
  },
  {
    id: "adults", label: "Adults", title: "Older adults and medically fragile adults",
    intro: "Aging and medical challenges can make everyday activities hard. Whether you are supporting an older adult or a medically fragile adult who needs added attention, we help clients keep as much independence as possible while staying comfortable at home.",
    items: [
      ["Bathing and personal hygiene", "help with bathing, grooming, oral care and cleanliness."],
      ["Dressing assistance", "help with dressing, undressing and choosing clothing."],
      ["Mobility and transfers", "support with walking, repositioning and safe transfers, as appropriate."],
      ["Toileting assistance", "respectful support with bathroom routines and hygiene."],
      ["Meal preparation and feeding", "help preparing meals and eating, based on care plans."],
      ["Medication reminders", "reminders to take prescribed medications, within our authorized scope of services."],
      ["Companionship and emotional support", "meaningful interaction, encouragement and friendship."],
      ["Daily living support", "help with routine activities to maintain comfort and independence."],
      ["Light housekeeping", "help with light household tasks for a clean, comfortable home."],
      ["Respite care", "temporary support so family caregivers can rest and recharge."],
      ["Transportation", "rides to doctor's appointments, prescription pick-up and shopping."],
    ],
  },
];

export const faqs: [q: string, a: string][] = [
  ["Who do you provide care for?", "We support children, teenagers and adults, including older adults and medically fragile adults who need help with daily living at home."],
  ["Which areas do you serve?", `We serve ${counties.slice(0, -1).join(", ")} and ${counties[counties.length - 1]} counties in Georgia.`],
  ["Do you help with medications?", "We offer medication reminders for adults, within our authorized scope of services."],
  ["Can you give family caregivers a break?", "Yes. Respite care gives family caregivers temporary relief to rest and recharge."],
  ["How do I get started?", `Call ${site.phone} or send us a message below. We will talk through your family's needs and get back to you.`],
];
