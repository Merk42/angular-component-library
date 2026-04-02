import { SchemaPathTree, validate } from "@angular/forms/signals";

export function url(field: SchemaPathTree<string>, options?: { message?: string }) {
  validate(field, (ctx) => {
    try {
      new URL(ctx.value());
      return null;
    } catch {
      return {
        kind: 'url',
        message: options?.message || 'Please enter a valid URL',
      };
    }
  });
}

export function zip(field: SchemaPathTree<string>, options?: { message?: string }) {
  validate(field, (ctx) => {
    const REGEX = /[0-9]{5}/;
    if (REGEX.test(ctx.value())) {
      return null
    } else {
      return {
        kind: 'zip',
        message:  options?.message || 'Zip code must be 5 digits',
      }
    }
  });
}

export function alphanumeric(field: SchemaPathTree<string>, options?: { message?: string }) {
  validate(field, (ctx) => {
    const REGEX = /^[a-zA-Z0-9]+$/;
    if (REGEX.test(ctx.value())) {
      return null
    } else {
      return {
        kind: 'zip',
        message:  options?.message || 'Field must only be letters and or numbers',
      }
    }
  });
}
