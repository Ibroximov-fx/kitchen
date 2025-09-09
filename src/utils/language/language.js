import { createI18n } from 'vue-i18n'
import * as uz from '../../language/uz.json'
import * as eng from '../../language/eng.json'
import * as ru from '../../language/ru.json'
let messages ={
    uz,
    ru,
    eng
}
const i18n = createI18n({
    legacy: false,
    locale: 'uz',
    messages
})
export default i18n;