# Bookmarks

A command-line program to create and open bookmarks.

# At a Bigger scope

You can think of it as browser bookmarks where folders are lists and sites are URLs or files in the system or executables

# Features

- create/remove/edit lists
- create/remove/edit/open items
- stores everything in a json file `lists.json`
- a backup `lists_backup.json` file contains the last state of the `lists.json` in case you fudged up

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/malikmouhiidine/bookmarks.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage

1. enter the root folder and run
   ```sh
   npm run build
   node dist/index.js
   ```
   Furthermore, you can use a symlink to run the program from wherever you are in the file system, Check out this [blog](https://dev.to/unorthodev/utilizing-symbolic-links-in-your-node-js-projects-17bo) for more information, From there it's pretty simple to use the program.

## TODOs

- [x] Convert To typescript. javascript is driving me crazy
- [x] Add a way to edit items/list

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements

- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [open](https://github.com/sindresorhus/open)

## License

Distributed under the MIT License. See `LICENSE` for more information.
