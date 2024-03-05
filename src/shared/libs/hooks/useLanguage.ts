import { $lang } from "@/shared/context/lang"
import { useUnit } from "effector-react"
import translationsJson from "@public/translations/translations.json"

export const useLanguage = () => {
    const lang = useUnit($lang)
    const translations = translationsJson
    return { lang, translations } 
}