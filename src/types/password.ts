export interface GeneratePasswordOptions {
    secret: string;
  service: string;
  policy: PasswordPolicy;
}
  
export interface PasswordPolicy {
  length: number;

  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;

  version: number;
}
  
  export interface PasswordSettings {
    length: number;
    includeNumbers: boolean;
    includeSymbols: boolean;
  }
  
  export interface PasswordResult {
    password: string;
    strength: "Weak" | "Medium" | "Strong";
  }