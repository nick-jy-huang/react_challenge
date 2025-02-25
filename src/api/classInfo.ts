export const ApiGetClassInfo = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id) {
        resolve({
          title: "302 Class",
          id: "X58E9647",
          link: "https://www.classswift.viewsonic.io",
        });
      } else {
        resolve({});
      }
    }, 2000);
  });
};
