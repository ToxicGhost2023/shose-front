
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


// فیلد  برای ثبت و حذف و اپدیت محصولات
export async function createProduct(productData) {

    const res = await fetch("http://localhost:3400/product/create", {
        method: "POST",
        cache: 'no-store',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });

    const result = await res.json();
    return { result, ok: res.ok };

}
export async function deleteProduct(id) {
    try {
        const res = await fetch(`http://localhost:3400/product/delete/${id}`, {
            method: 'DELETE',
            cache: 'no-store',
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'خطا در حذف محصول');
        }

        return await res.json();
    } catch (error) {
        console.error('خطا در حذف:', error.message);
        throw error;
    }
}

// فیلد مخصوص جشواره های تخفیف دارد

export async function ondiscount({ discountPercentage }) {
    try {
        const res = await fetch("http://localhost:3400/alldicount/on", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ discountPercentage }),
        });

        const result = await res.json();
        return { result, ok: res.ok };
    } catch (error) {
        return { result: { message: "خطا در اتصال به سرور" }, ok: false };
    }


}
export async function offdiscount() {
    try {
        const res = await fetch("http://localhost:3400/alldicount/off", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });

        const result = await res.json();
        return { result, ok: res.ok };
    } catch (error) {
        return { result: { message: "خطا در اتصال به سرور" }, ok: false };
    }


}