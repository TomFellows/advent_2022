import * as dotenv from 'dotenv';
dotenv.config();

if (require.main === module) {
  const day = process.argv[2];
  require(`./${day}/index`).main().then(() => process.exit()).catch((e:any) => {
    console.error(e);
    process.exit(1);
  });
}
