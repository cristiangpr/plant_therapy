import { API } from "../config";


export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createGear = (userId, token, gear) => {
    return fetch(`${API}/gear/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: gear
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {

            return response.json();

        })
        .catch(err => console.log(err));
};
export const getInventories = () => {
    return fetch(`${API}/inventories`, {
        method: "GET"
    })
        .then(response => {
          console.log(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getSizeValues = () => {
    return fetch(`${API}/products/sizes`, {
        method: "GET",

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getMessages = () => {
    return fetch(`${API}/messages`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status, orderId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getGears = () => {
    return fetch(`${API}/gears?limit=70`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteGear = (gearId, userId, token) => {
    return fetch(`${API}/product/${gearId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getGear = gearId => {
    return fetch(`${API}/gear/${gearId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateGear = (gearId, userId, token, gear) => {
    return fetch(`${API}/gear/${gearId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: gear
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const listUsers = () => {
  return fetch(`${API}/users?limit=undefined`, {
      method: "GET"
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};



export const updateUser = ( userId, adminId, token, user) => {
    console.log(JSON.stringify(user))
return fetch(`${API}/admin/user/${userId}/${adminId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteUser = ( userId, adminId, token) => {
    return fetch(`${API}/admin/user/${userId}/${adminId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const readUser = (userId, token) => {
    return fetch(`${API}/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const readCategory = (categoryId, token) => {
    return fetch(`${API}/category/${categoryId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateCategory = ( categoryId, userId, token, category) => {
  console.log(JSON.stringify(category))
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
           "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify (category)

    })

        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

};
export const updateMessage = ( messageId, userId, token, message) => {
  console.log(JSON.stringify(message))
    return fetch(`${API}/message/${messageId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
           "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify (message)

    })

        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

};

export const createInventory = (userId, token, inventory) => {
    return fetch(`${API}/inventory/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inventory)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const readInventory = (inventoryId, token) => {
    return fetch(`${API}/inventory/${inventoryId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateInventory = ( inventoryId, userId, token, inventory) => {
    return fetch(`${API}/inventory/${inventoryId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
               "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inventory)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createCoupon = (userId, token, coupon) => {
    return fetch(`${API}/coupon/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(coupon)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const deleteCategory = ( categoryId, adminId, token) => {
    return fetch(`${API}/category/${categoryId}/${adminId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteMessage = ( messageId, adminId, token) => {
    return fetch(`${API}/message/${messageId}/${adminId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const deleteInventory = ( inventoryId, adminId, token) => {
    return fetch(`${API}/inventory/${inventoryId}/${adminId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteCoupon = ( couponId, userId, token) => {
  console.log("delete")
    return fetch(`${API}/coupon/${couponId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCoupons = () => {
    return fetch(`${API}/coupons`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const readCoupon = (couponId, token) => {
    return fetch(`${API}/coupon/${couponId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const readMessage = (messageId, userId, token) => {
    return fetch(`${API}/message/${messageId}/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updateCoupon = ( couponId, userId, token, coupon) => {
    return fetch(`${API}/coupon/${couponId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
               "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(coupon)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const readOrder = (orderId, token) => {
    return fetch(`${API}/order/${orderId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createMessage = (message) => {
return    fetch(`${API}/message/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)

    })
        .then(response => {
            return response.json();

        })
        .catch(err => {
            console.log(err);
        });
};



export const listInvoices = (userId, token) => {
    return fetch(`${API}/invoice/list/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateInvoiceStatus = (userId, token, invoiceId, status) => {
    return fetch(`${API}/invoice/${invoiceId}/status/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status, invoiceId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getInvoiceStatusValues = (userId, token) => {
    return fetch(`${API}/invoice/status-values/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const readInvoice = (invoiceId, token) => {
    return fetch(`${API}/invoice/${invoiceId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateInvoice = (invoiceId, userId, token, invoice) => {
    return fetch(`${API}/product/${invoiceId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: invoice
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
