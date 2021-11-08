const baseTemplate = `
<section class="currency-convertor">
    <div class="currency-convertor__wrapper">
        <h2 class="currency-convertor__title">{{title}}</h2>
        <nav class="currency-convertor__tabs">
            {{#tabs}}
                <label class="currency-convertor__tab">
                    <input name="tab" type="radio" value={{value}} {{state}} />
                    <span class="currency-convertor__label">{{label}}</span>
                </label>
            {{/tabs}}
        </nav>
        <main class="currency-convertor__rates"></main>
        <footer class="currency-convertor__footer">
            <span class="currency-convertor__info">{{production}}</span>
        </footer>
    </div>
</section>`;

export {
    baseTemplate
};
