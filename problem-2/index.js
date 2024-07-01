class Country {
    constructor(name, population, carbonFootprint) {
        this._name = name;
        this._population = population;
        this._carbonFootprint = carbonFootprint;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get population() {
        return this._population;
    }

    set population(value) {
        this._population = value;
    }

    get carbonFootprint() {
        return this._carbonFootprint;
    }

    set carbonFootprint(value) {
        this._carbonFootprint = value;
    }

    getDescription() {
        return `Country: ${this._name}, Population: ${this._population}, Carbon Footprint: ${this._carbonFootprint}`;
    }
}

class DevelopedCountry extends Country {
    constructor(name, population, carbonFootprint, gdp) {
        super(name, population, carbonFootprint);
        this._gdp = gdp;
    }

    get gdp() {
        return this._gdp;
    }

    set gdp(value) {
        this._gdp = value;
    }

    getDescription() {
        return `${super.getDescription()}, GDP: ${this._gdp}`;
    }
}

class DevelopingCountry extends Country {
    constructor(name, population, carbonFootprint, literacyRate) {
        super(name, population, carbonFootprint);
        this._literacyRate = literacyRate;
    }

    get literacyRate() {
        return this._literacyRate;
    }

    set literacyRate(value) {
        this._literacyRate = value;
    }

    getDescription() {
        return `${super.getDescription()}, Literacy Rate: ${this._literacyRate}`;
    }
}
