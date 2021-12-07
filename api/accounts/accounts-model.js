const db = require('../../data/db-config')

async function getAll() {
  const rows = await db('accounts')
  return rows
}

async function getById(id){
  const row = await db('accounts')
    // .select('id', 'name', 'budget')
    .where('id', id)
    return row
}

async function create(account){
  const [accountId] = await db('account')
  .insert(account)
  const newAccount = await getById(accountId);
  return newAccount
}

async function updateById(id, account){
  await db('accounts')
    .update(account)
    .where('id', id)
  const updated = await getById(id);
  return updated
}

async function deleteById(id){
  await db('accounts')
    .delete()
    .where('id', id);
  return `Account with id ${id} has been removed`
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
