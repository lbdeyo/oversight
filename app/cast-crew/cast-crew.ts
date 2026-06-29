import fs from "fs";
import path from "path";

const CAST_CREW_DIR = path.join(process.cwd(), "public/img/cast-crew");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

const CHARACTER_ROLES = new Set([
  "Senator Greune",
  "General Stossen",
  "Secretary of State",
  "Representative Johnston",
  "Adam Harriman",
  "Vice President",
  "Cass Ogden",
  "Kareem Najah",
  "Ofelia Cromwell",
]);

const MEMBER_CONFIG: Record<
  string,
  { name?: string; title?: string; bio?: string }
> = {
  "lb-deyo": {
    name: "L.B. Deyo",
    title: "Playwright, Producer",
    bio: "The Zahir founder L.B. Deyo is a playwright whose play *Apprehension* premiered at Hyde Park Theatre in 2025 and won the 2026 Austin Theatre Critics Award for Outstanding Original Script. He is the author of several books, including, with David \"Lefty\" Leibowitz, *Invisible Frontier: Exploring the tunnels, ruins & rooftops of hidden New York* . He's acted in such Austin plays as *The Intergalactic Nemesis* and *Dance, Cupcake, Dance*.",
  },
  "laura-deramo": {
    name: "Laura D'Eramo",
    title: "Secretary of State",
    bio: "Laura D'Eramo is an Austin-based theatre and on-camera actor whose work spans classical, contemporary, and experimental performance. She received her B.A. from St. Edward's University and continued her training at the Atlantic Acting School in NYC. After graduation, Laura moved to Japan, teaching English for two years and performing with the Tokyo International Players, an experience that broadened her artistic and global perspective. Since returning to Austin in 2024, she has worked with Austin Shakespeare, Walking Shadow Shakespeare Project, The Filigree Theatre, The Stage Austin, and The Vortex. Recent credits include *MotherTree* at The Vortex and *Caesar+Antony+Cleopatra* with Walking Shadow Shakespeare. She recently appeared in The Stage Austin's *Titus Andronicus*.",
  },
  "jessica-cohen": {
    title: "Cass Ogden",
    bio: "Jessica Brynn Cohen is an actor, writer, musician, filmmaker, and all-around storyteller and performer. She has appeared in many theatrical productions in Austin and beyond, having performed on stages such as The Vortex, City Theatre Austin, and Hyde Park Theatre. She holds a B. Iden Payne for \"Outstanding Featured Musical Performance\" for her work in the 2021 Vortex Summer Youth Theatre. Alongside her theatrical work, she has worked on several films both in front of and behind the camera, including acting in Richard Linklater's Netflix original *Apollo 10½*, which was featured at SXSW 2022. She is an avid singer/songwriter and has released several singles on Spotify, with plans to release more music in the near future, and several other creative projects currently in the works. You can connect with her on Instagram @jessa.cohen.",
  },
  "danu-mara": {
    title: "Representative Johnston",
    bio: "Danu Mara is a voice-over and on-camera actor with over 20 years of experience in commercials, animation, film, video games, and eLearning. She voiced hundreds of characters for educational software used nationwide and performed internationally in *The Intergalactic Nemesis*, portraying a wide range of humans, robots, and aliens. Her credits include roles in *Flatland: The Movie* (alongside Martin Sheen and Kristen Bell) and Rooster Teeth's *Lazer Team 2* and *Nomad of Nowhere*. A Daytime Emmy nominee with a B.A. in Drama from Texas Woman's University, Danu has also trained at The Second City in Chicago and is a core member of the acclaimed sketch troupe The Latino Comedy Project.",
  },
  "brent-werzner": {
    title: "Adam Harriman",
    bio: "Brent Werzner is an actor who has worked and performed professionally with major motion picture, television, and interactive media studios, including A24, Netflix, NBC, CBS, Universal and Rockstar Games. Brent is an alumni of Saint Edward's University, in Austin, TX, and is a long-standing member of the Screen Actors Guild (SAG). He is known for his roles in critically acclaimed films *Green Room* (2015) and *Blue Ruin* (2013), as well as in CBS' *Blue Bloods*, and Netflix's episodic comedy, *On My Block*. Theatrically, he has worked with the renowned SITI Company and director Anne Bogart, debuting the role of Poseidon in *Trojan Women (After Euripides)* at the Getty Villa in Los Angeles and the Harvey Theatre in New York City. Brent also performed the title role in Euripides' *Herakles*; touring internationally through Greece, and at BAM's Fisher Stage in Brooklyn, NY. Brent also works as an employment and civil rights paralegal for Kaplan Law Firm in Austin. Brent wishes to express his deepest gratitude to Elizabeth, his wife and partner, for her love and support.",
  },
  "justin-smith": {
    title: "Vice President",
    bio: "Justin G. Smith is an actor and musician originally from Memphis, Tennessee. A longtime performer within Austin's creative community, he has spent over a decade appearing on regional stages and recordings and has toured nationally and internationally as a musician. Recent theatre credits include productions with Dirty Gold, Ground Floor Theatre, Jarrott Productions, and more. Justin is most drawn to grounded, character-driven stories.",
  },
  "david-kroll": {
    title: "General Stossen",
    bio: "David Kroll is known for *A Perfect World* (1993), *Virus* (2011) and *For Serious* (2014).",
  },
  "noah-masterson": {
    title: "Producer",
    bio: "Noah Masterson is a playwright, musician, juggler, and general creative rabble rouser. He was part of New York City's Inverse Theater Company in the late 90s and early aughts. His most recent play is *THE EGG*, a surrealist dark comedy about technology gone very, very wrong. Noah holds a degree in screenwriting from the University of Miami.",
  },
  "lowell-bartholomee": {
    title: "Sound/Video Designer",
    bio: "Lowell Bartholomee is an actor, playwright, designer, and director. His most recent work has been seen and/or heard at Hyde Park in both previous iterations of *Wakey Wakey*, *The Christians*, and *A Bright New Boise*; *There and Back*, *Single Black Female*, *Jenna and the Whale*, and *Amy and the Orphans* (Ground Floor); *The Heidi Chronicles*, *Stage Kiss*, *Hand to God*, *Luna*, *Men on Boats*, and *BKLYN* (Southwestern University); *It's a Wonderful Life*, *Art*, *Anton Chekhov is a Tasty Snack* , and *Vincent* (Penfold); *She Was Here*, *Baskerville*, *The Norwegians*, and *A Gentleman's Guide to Love and Murder* (Austin Playhouse); *Little Women* (St. Edward's University), and various Scriptworks Out of Ink showcases. He has received the B. Iden Payne Award and the Austin Critics Table Award and is an artistic company member of Rude Mechs, Hyde Park Theatre, and Austin Playhouse; and a playwright member of ScriptWorks.",
  },
  "marcus-mcquirter": {
    name: "Marcus McQuirter",
    title: "Director",
    bio: "Marcus McQuirter currently serves as chair of the Drama Department at Austin Community College where he teaches voice, acting, and theater appreciation. He holds a BFA in Directing from Howard University, an MA in Theater from the University of North Texas, and earned his PhD in Performance as Public Practice from the University of Texas at Austin. He sits on the advisory board for ACC's Interdisciplinary Studies Department, the ACCTV Network, and New Manifest Theatre Company. Professionally active as a stage and audio drama director in Central Texas, recent credits include *Annie Jump and the Library of Heaven* (Vortex Theater Company), *She Kills Monsters* (Southwestern University), *Not This White Woman* (Hyde Park Theater), *Hearts Like Fists* (Austin Community College), and Jarrett King's *A War of the Worlds* (Penfold Theater Company), *Nightbird* (Austin Playhouse), *The Burden of Legacy Podcast*, and *Macbeth* (MMNT), and *The Importance of Being Earnest* (Austin Community College).",
  },
  "natalie-george": {
    title: "Lighting Designer",
    bio: "Natalie George is an award winning lighting designer, producer, events manager, and artist based in Austin, TX. After studying Theater Arts at St. Edward's University, Natalie began to work as a freelance lighting designer and stage manager around Austin and beyond. Quickly her design work became her full-time focus, designing for Salvage Vanguard Theater, Rude Mechs, Mary Moody Northern Theater, The O'Neill Theater Center, and many more. In 2014 she founded Natalie George Productions, where she now works full-time as Executive Director. While she enjoys working throughout the US, her love of all things Austin keeps her rooted here and affords her the opportunity to use her many contacts and resources to collaborate on interesting projects as a lighting designer, technical consultant, or event producer.",
  },
  "robert-pierson": {
    title: "Senator Greune",
    bio: "Robert Pierson was born in 1962 in Bethesda, Maryland, USA. He is an actor and composer, known for *Slacker* (1990), *You're Driving Me Crazy* (1990) and *Nadia: The Secret of Blue Water* (1990).",
  },
  "ivy-vidal": {
    title: "Costumer",
  },
  "monroe-oxley": {
    title: "Scenic Designer",
    bio: "Monroe Oxley is a dynamic storyteller, artist, and educator whose work spans theatre, film, photography, and creative writing. A native Texan with over 16 years of experience as a Technical Director and scenic designer, Monroe has brought countless productions to life with his eye for detail and commitment to craftsmanship. For more than 14 years, he has also inspired students, teaching the technical and artistic skills needed to tell powerful stories on stage and screen.",
  },
  "rommel-sulit": {
    title: "Kareem Najah",
  },
  "janelle-buchanan": {
    title: "Ofelia Cromwell",
  },
};

export type CastCrewMember = {
  name: string;
  title: string;
  imageSrc: string;
  bio: string;
};

export function formatMemberTitle(title: string): string {
  return CHARACTER_ROLES.has(title) ? `\u201C${title}\u201D` : title;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.[^.]+$/, "");
}

function nameFromSlug(slug: string): string {
  if (MEMBER_CONFIG[slug]?.name) return MEMBER_CONFIG[slug].name!;

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function nameFromFilename(filename: string): string {
  return nameFromSlug(slugFromFilename(filename));
}

function placeholderTitle(slug: string, index: number): string {
  if (MEMBER_CONFIG[slug]?.title) return MEMBER_CONFIG[slug].title!;

  return index % 2 === 0 ? "Character TBD" : "Role TBD";
}

function placeholderBio(name: string): string {
  return `${name} is part of the Oversight company. Full bio coming soon.`;
}

function bioForMember(slug: string, name: string): string {
  if (MEMBER_CONFIG[slug]?.bio) return MEMBER_CONFIG[slug].bio!;

  return placeholderBio(name);
}

export function getCastCrewMembers(): CastCrewMember[] {
  const filenames = fs
    .readdirSync(CAST_CREW_DIR)
    .filter((filename) => IMAGE_EXT.test(filename))
    .sort((a, b) =>
      nameFromFilename(a).localeCompare(nameFromFilename(b), undefined, {
        sensitivity: "base",
      }),
    );

  return filenames.map((filename, index) => {
    const slug = slugFromFilename(filename);
    const name = nameFromSlug(slug);
    const title = placeholderTitle(slug, index);
    return {
      name,
      title,
      imageSrc: `/img/cast-crew/${filename}`,
      bio: bioForMember(slug, name),
    };
  });
}
