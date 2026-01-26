const { exec } = require('node:child_process')

function checkDatabase() {
  exec(
    'docker exec tabnews-clone-postgres-dev pg_isready --host localhost',
    handleReturn,
  )

  function handleReturn(error, stdout) {
    if (stdout.search('accepting connections') === -1) {
      process.stdout.write('.')
      checkDatabase()
      return
    }

    console.log('\n🟢 Database is ready to accept connections!\n')
  }
}

process.stdout.write(
  '\n\n🔴 Waiting for database to start accepting connections',
)
checkDatabase()
