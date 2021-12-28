// Import js files from 'client'
import { validateText } from './js/textValidate'
import { getKey } from './js/keyGetter'
import { getMeaning } from './js/apiGetter'
import { handleSubmit } from './js/formHandler'
import { polarityGet } from './js/scoreTag'
import { updateUI } from './js/uiHandler'

// Import styles from 'client'
import './styles/resets.scss'
import './styles/main.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export { validateText, getKey, getMeaning, polarityGet, updateUI, handleSubmit }


// TODO: include your scss file here

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
