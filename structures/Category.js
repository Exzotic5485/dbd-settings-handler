class Category {
    constructor(options = { categoryId: "", categoryName: "", categoryDescription: "" }) {
        this.categoryId = options.categoryId;
        this.categoryName = options.categoryName;
        this.categoryDescription = options.categoryDescription;
        this.categoryOptionsList = [];
    }

    /**
     * 
     * @param {string} id - The id of the category, must be unique
     * @returns 
     */
    setId(id) {
        this.categoryId = id;

        return this;
    }

    /**
     * 
     * @param {string} name - The name of the category displayed in the dashboard
     * @returns 
     */
    setName(name) {
        this.categoryName = name;

        return this;
    }

    /**
     * 
     * @param {string} description - The description of the category displayed in the dashboard
     * @returns
     */
    setDescription(description) {
        this.categoryDescription = description;

        return this;
    }

    /**
     * @param {import('./Option')[]} options - The options of the category
     * @example
     * new Category()
     * .setId('setup')
     * .setName("Setup")
     * .setDescription("Setup your bot with default settings!")
     * .addOptions(
     *    new Option()
     *   .setId('lang')
     *  .setName("Language")
     * .setDescription("Change bot's language easily")
     * .setType(dbd.formTypes.select({"Polish": 'pl', "English": 'en', "French": 'fr'}))
     * )
     */
    addOptions() {
        this.categoryOptionsList.push(...arguments);

        return this;
    }
}

module.exports = Category;