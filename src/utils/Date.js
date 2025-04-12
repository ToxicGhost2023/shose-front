import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });

export const toPersianDate = (isoDate) => {
    return moment(isoDate).format("jYYYY/jMM/jDD");
};