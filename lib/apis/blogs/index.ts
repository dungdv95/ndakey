import API from "@/configs/API";
import { customFetch } from "@/lib/customFetch";

async function getBlogPost({
  pageIndex,
  pageSize,
  applicationFilter,
  categoryIdFilter,
}: {
  pageIndex: number;
  pageSize: number;
  applicationFilter: string;
  categoryIdFilter?: string;
}) {
  const response = await customFetch(
    `${
      API.BLOG.GET
    }?pagination.page=${pageIndex}&pagination.pageSize=${pageSize}&applicationFilter=${applicationFilter}${
      categoryIdFilter ? `&categoryIdFilter=${categoryIdFilter}` : ""
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (response.status !== 200) {
    throw {
      code: data?.code,
      message: data?.message ? data?.message : "Can not fetch api!",
    };
  }

  return data ? data?.blogs : [];
}

async function getCategories({
  applicationFilter,
}: {
  applicationFilter: string;
}) {
  const response = await customFetch(
    `${API.BLOG.CATEGORY}?applicationFilter=${applicationFilter}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (response.status !== 200) {
    throw {
      code: data?.code,
      message: data?.message ? data?.message : "Can not fetch api!",
    };
  }

  return data ? data?.categories : [];
}

async function getBlogPostDetail({ slugFilter }: { slugFilter: string }) {
  const response = await customFetch(
    `${API.BLOG.GET}?slugFilter=${slugFilter}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (response.status !== 200) {
    throw {
      code: data?.code,
      message: data?.message ? data?.message : "Can not fetch api!",
    };
  }

  return data ? data?.blogs : [];
}

export default Object.freeze({
  getBlogPost,
  getCategories,
  getBlogPostDetail,
});
