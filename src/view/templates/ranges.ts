const rangesTemplate = `
<div class="rates">
    {{#rates}}
        <section class="rates__item">
            <h3 class="rates__item-title">{{code}}</h3>
            <div class="rates__item-info">
                <span class="rates__item-info-text">1 {{baseCurrencyValue}} is {{rate}} {{value}}</span>
            </div>
            <div class="rates__item-changer">
                <label class="rates__item-changer-field">
                    <span class="rates__item-changer-label">{{baseCurrencyCode}}: {{amount}}</span>
                    <input id={{code}} class="rates__item-changer-input" name="base" type="range" value={{amount}} min="0" max="200" />
                </label>
                <label class="rates__item-changer-field">
                    <span class="rates__item-changer-label">{{code}}: {{calculation}}</span>
                    <input class="rates__item-changer-input" name="tab" type="range" value={{calculation}} min="0" max="6080" />
                </label>
            </div>
        </section>
    {{/rates}}
</div>`;

export {
    rangesTemplate
};
