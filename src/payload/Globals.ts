import type { GlobalConfig } from "payload";
import BrandSettings from "./globals/brandSetting";
import Homepage from "./globals/homepage";
import ContactInfo from "./globals/contactInfo";

const Globals: GlobalConfig[] = [
    Homepage,
    ContactInfo,
    BrandSettings
]

export default Globals;