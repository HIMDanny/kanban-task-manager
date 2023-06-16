import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const COMMIT_MODIFIERS = ['+', '*', '-'];
const COMMIT_MESSAGE_REGEXP = /^ktm-\d+: (\+|\*|\-) .*$/;
const COMMIT_MESSAGE_MATCH_RULE_MESSAGE = `
commit message doesn't match format requirements
Commit message must have one of the following formats:
  - <project-prefix>-<issue-number>: <modifier> <description>
Where:
  - <project-prefix>: ktm
  - <modifier>: ${COMMIT_MODIFIERS.join(', ')}
Examples:
  - ktm-5: + ui/ux lecture
  - ktm-12: * docker homework
`;

const Configuration: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: COMMIT_MESSAGE_REGEXP,
      headerCorrespondence: [
        'prefix',
        'issue-number',
        'modifier',
        'description',
      ],
    },
  },
  defaultIgnores: true,
  plugins: [
    {
      rules: {
        'commit-message-match': ({ header }): [true] | [false, string] => {
          if (!COMMIT_MESSAGE_REGEXP.test(header)) {
            return [false, COMMIT_MESSAGE_MATCH_RULE_MESSAGE];
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    'commit-message-match': [2, 'always'],
  },
};

export default Configuration;
