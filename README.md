# nostr-exp

Playground for [nostr protocol](https://github.com/nostr-protocol/nostr).

## Private Key Generation

```sh
deno run keygen.ts [PREFIX]
```

This command is considered safe because it does not require any Deno [permissions](https://deno.land/manual@v1.30.3/basics/permissions) to access file, network or subprocess, etc.

> Deno is secure by default. Therefore, unless you specifically enable it, a program run with Deno has no file, network, or environment access. Access to security sensitive functionality requires that permissions have been granted to an executing script through command line flags, or a runtime permission prompt.

## License

MIT, see [LICENSE](LICENSE).

## Author

Susumu OTA
