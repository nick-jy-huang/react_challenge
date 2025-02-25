export type studentType = {
  id: number;
  name: string;
  seat: number;
  score: number;
  isOnline: boolean;
  groupId: number;
};

export const ApiGetStudentList = (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let groupId: number = 0;
      const data: studentType[] = [];

      for (let i = 0; i < 40; i++) {
        if (i % 8 === 0) {
          groupId += 1;
        }
        const student = {
          id: i,
          name: `Student_${i + 1}`,
          seat: i + 1,
          score: 0,
          isOnline: i % 3 === 0,
          groupId: groupId,
        };

        data.push(student);
      }

      if (id) {
        resolve(data);
      } else {
        resolve(data);
      }
    }, 2000);
  });
};
