import { approveProject } from "./actions";

export async function main() {
  await approveProject();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
