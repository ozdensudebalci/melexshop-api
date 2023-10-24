/** 
 *  @typedef {Object} PaymentMethod
 *  @property {string} name
*/

/**
 * @typedef  {Object} NavigationElement
 * @property {number} id
 * @property {string} url
 * @property {string} label
 */

/** 
 *  @typedef {Object} MainNavigation
 *  @property {string} logo
 *  @property {NavigationElement[]} navigations
*/

/**
 * @typedef {Object} Footer
 *  @property {string} logo
 *  @property {number} width
 *  @property {number} height
 *  @property {string} alt
 *  @property {string} title
 *  @property {string} description
 *  @property {NavigationGroup[]} navigation_groups
 */

/**
 * @typedef {Object} NavigationGroup
 * @property {string} id - optional
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} Context
 * @property {string} page
 * @property {string} type
 * @property {boolean} registarble
 * @property {string[]} languages
 * @property {string[]} currencies
 * @property {number} basket_item_timeout
 * @property {Footer} footer
 * @property {MainNavigation} main_navigation
 * @property {PaymentMethod[]} payment_methods  
*/

/**
 * @typedef {Object} Page
 * @property {string} title
 * @property {string} description
 * @property {string} meta_title
 * @property {string} meta_keywords
 * @property {string} meta_description
 * @property {string} token
 * @property {any[]} blocks
 */