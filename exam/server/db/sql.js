module.exports = {
   boardList : `select b.*, ifNull(c.count, 0) as count
               from t_board_board b left join (select bno, count(bno) as count from t_comment_board group by bno) c on b.no = c.bno`,
   boardInfo : `select * from t_board_board where no = ?`,
   commentInfo : `select * from t_comment_board where bno = ?`,
   boardInsert : `INSERT INTO t_board_board SET ?`,
   boardUpdate : `UPDATE t_board_board SET ? WHERE no = ?`,

}