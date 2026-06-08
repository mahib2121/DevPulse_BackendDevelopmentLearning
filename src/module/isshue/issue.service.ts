import pool from "../../db/database";

export const createIssue = async (
  title: string,
  description: string,
  type: string,
  reporterId: number,
) => {
  const result = await pool.query(
    `
    INSERT INTO issues
    (
      title,
      description,
      type,
      reporter_id
    )
    VALUES
    (
      $1,
      $2,
      $3,
      $4
    )
    RETURNING *
    `,
    [title, description, type, reporterId],
  );

  return result.rows[0];
};

export const getAllIssues = async () => {
  const result = await pool.query(`
    SELECT *
    FROM issues
    ORDER BY created_at DESC
  `);

  return result.rows;
};
export const getIssueById = async (id: number) => {
  const result = await pool.query(
    `
    SELECT *
    FROM issues
    WHERE id = $1
    `,
    [id],
  );

  return result.rows[0];
};
