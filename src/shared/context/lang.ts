import { createDomain } from "effector";
import { AllowLangs } from "../constants/lang";

const lang = createDomain() // Для групировки  состояний в Effector

export const setLang = lang.createEvent<AllowLangs>()

export const $lang = lang
    .createStore(AllowLangs.RU)
    .on(setLang, (_, lang) => lang)