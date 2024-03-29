'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-persian documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxPersianModule.html" data-type="entity-link" >NgxPersianModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' : 'data-target="#xs-directives-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' :
                                        'id="xs-directives-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' }>
                                        <li class="link">
                                            <a href="directives/PersianLetterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersianLetterDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PersianNumbersDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersianNumbersDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' : 'data-target="#xs-pipes-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' :
                                            'id="xs-pipes-links-module-NgxPersianModule-715c8cd33a0d84484443a47a9099b6adc1bfa402690392e05778a22fdb41e8a19e499c0bb65f529516b2016588bc7d4586a93fe9439806c3e971dee0ee785fb6"' }>
                                            <li class="link">
                                                <a href="pipes/EnNumPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnNumPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FaNumPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaNumPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IRCurrencyPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IRCurrencyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/JdatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JdatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NationalCodePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NationalCodePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/InvalidJalaliDateError.html" data-type="entity-link" >InvalidJalaliDateError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidMobileOperatorError.html" data-type="entity-link" >InvalidMobileOperatorError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidMobilePhoneNumberError.html" data-type="entity-link" >InvalidMobilePhoneNumberError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidNationalCodeError.html" data-type="entity-link" >InvalidNationalCodeError</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvalidServiceInputError.html" data-type="entity-link" >InvalidServiceInputError</a>
                            </li>
                            <li class="link">
                                <a href="classes/JDate.html" data-type="entity-link" >JDate</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JalaliDateCalculatorService.html" data-type="entity-link" >JalaliDateCalculatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JalaliDateValidatorService.html" data-type="entity-link" >JalaliDateValidatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MobilePhoneNumberService.html" data-type="entity-link" >MobilePhoneNumberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NationalCodeService.html" data-type="entity-link" >NationalCodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersianLetterService.html" data-type="entity-link" >PersianLetterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersianNumberService.html" data-type="entity-link" >PersianNumberService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PersianService.html" data-type="entity-link" >PersianService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PLOptions.html" data-type="entity-link" >PLOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SimpleDateInterface.html" data-type="entity-link" >SimpleDateInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});