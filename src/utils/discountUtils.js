//فانکشن برای اعمال تخفیف

export const applyDiscount = (price, discountPercentage) => {
    if (price <= 0 || discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Invalid price or discount percentage");
    }

    const discountAmount = (price * discountPercentage) / 100;
    const finalPrice = price - discountAmount;

    return finalPrice;
};