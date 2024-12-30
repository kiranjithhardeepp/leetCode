class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value = 0) {
        this.value = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;
        return this; // Return the instance for chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        return this; // Return the instance for chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        return this; // Return the instance for chaining
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value == 0) {
            throw new Error("Division by zero is not allowed");
        }
        else {
            this.value /= value;
            return this; // Return the instance for chaining
        }
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value);
        return this; // Return the instance for chaining
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value; // Return the current value
    }
}

