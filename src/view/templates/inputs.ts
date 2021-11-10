const inputsTemplate = `
<div class="rates">
    {{#rates}}
        <section class="rates__item">
            <h3 class="rates__item-title">{{code}}</h3>
            <div class="rates__item-info">
                <span class="rates__item-info-text">1 {{baseCurrencyValue}} is</span>
                <input class="rates__item-info-input" name="info" type="text" value={{rate}} />
                <span class="rates__item-info-currency">{{value}}</span>
            </div>
            <div class="rates__item-changer">
                <label class="rates__item-changer-field">
                    <span class="rates__item-changer-label">{{baseCurrencyCode}}</span>
                    <input id={{code}} class="rates__item-changer-input" name="base" type="text" value={{amount}} />
                </label>
                <label class="rates__item-changer-field">
                    <span class="rates__item-changer-label">{{code}}</span>
                    <input class="rates__item-changer-input" name="tab" type="text" value={{calculation}} />
                </label>
            </div>
        </section>
    {{/rates}}
</div>`;

export {
    inputsTemplate
};
