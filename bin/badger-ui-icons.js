#!/usr/bin/env node
import { commandLine } from '@abw/svg-icon-librarian';
import { icons } from '../src/config/icons.js'

await commandLine({
  baseIcons: { badger: icons }
});
