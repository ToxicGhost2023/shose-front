
// درخواست های مربوط به ثبت نام و ورود و خروج---------------------------
export async function fetchRegister(data) {
    try {
        const res = await fetch("http://localhost:3400/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.status === 400) {
            return { error: "این حساب قبلاً ساخته شده" };
        }

        const result = await res.json();
        return { data: result };

    } catch (error) {
        return { error: "خطا در ارتباط با سرور" };
    }
}
export async function verifyOtpCode(otp) {
    try {
        const res = await fetch("http://localhost:3400/auth/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ otp }),
            credentials: "include",
        });

        const data = await res.json();
        return data;

    } catch (error) {
        return { error: "خطا در تأیید کد یبار مصرف" };
    }
}
export async function fetchLogin(data) {
    try {
        const res = await fetch("http://localhost:3400/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include",
        });
        if (res.status !== 200) {
            return Swal.fire({
                title: "خطا",
                text: result.error || "مشکلی در ارسال کد پیش آمده",
                icon: "error",
            });
        }
        const result = await res.json();
        return { data: result, error: null };
    } catch (error) {
        return { error: "خطا در ارسال درخواست ورود" };
    }
}
export async function fetchLogOut() {
    try {
        const res = await fetch("http://localhost:3400/auth/logout", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        const result = await res.json();
        return { data: result };
    } catch (error) {
        return { error: "خطا در ارسال درخواست ورود" };
    }
}

// درخاوست های برای یوزرــــــــــــــــ
export async function userDetails({ token }) {


    ;
    try {
        const res = await fetch("http://localhost:3400/user/details", {
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const result = await res.json();
            throw new Error(result.error || "مشکلی در دریافت اطلاعات کاربر وجود دارد");
        }

        const result = await res.json();
        return result;

    } catch (error) {
        console.error("Error in fetching user details:", error);
        throw error;
    }
}

//  فیلد مربوط به کاربرانــــــــــــــــــــــــــــــــــ
export async function getTotalUsers() {

    const res = await fetch("http://localhost:3400/user/count", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(
            data.error || "مشکلی در دریافت اطلاعات کاربر وجود دارد"
        );
    }

    const data = await res.json();
    return data
}

export async function getAllUsers() {
    const res = await fetch("http://localhost:3400/user/all", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error(
            data.error || "مشکلی در دریافت اطلاعات کاربران وجود دارد"
        );
    }
    const { users } = await res.json();
    return users

}


// فیلد  برای ثبت و حذف و اپدیت محصولات
export async function createProduct(productData) {
    const res = await fetch("http://localhost:3400/product/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });

    const result = await res.json();
    return { result, ok: res.ok };

}