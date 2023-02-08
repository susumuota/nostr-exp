import nostr from 'npm:nostr-tools@1.2.3';

const generateKey = (prefix: string) => {
  const prefixLen = prefix.length;
  while (true) {
    const sk = nostr.generatePrivateKey();
    const npub = nostr.nip19.npubEncode(nostr.getPublicKey(sk));
    const s = npub.substr(5, prefixLen);
    if (s === prefix) {
      const nsec = nostr.nip19.nsecEncode(sk);
      console.log({ nsec, npub });
    }
  }
};

// lower alphanumeric except '1', 'b', 'i', 'o'
const checkPrefix = (prefix: string) => /^[02-9ac-hj-np-z]+$/.test(prefix);

if (Deno.args.length === 0 || Deno.args.length === 1 && checkPrefix(Deno.args[0])) {
  generateKey(Deno.args[0] ?? '');
} else {
  console.log(
    'Usage: deno run keygen.ts [PREFIX]\n\n  PREFIX must be lower-case alphanumeric except 1, b, i, o.',
  );
}
