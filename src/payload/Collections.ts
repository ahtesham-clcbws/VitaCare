import type { CollectionConfig } from "payload";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { BlogCategories } from "./collections/BlogCategories";
import { Blogs } from "./collections/Blogs";
import { Partners } from "./collections/Partners";
import { Services } from "./collections/Services";
import { Teams } from "./collections/Teams";

const Collections: CollectionConfig[] = [
    Media,
    Users,

    BlogCategories,
    Blogs,

    Partners,
    Services,
    Teams
]

export default Collections;