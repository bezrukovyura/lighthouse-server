import { ChromeFlags } from "./ChromeFlags";

export interface ILighthouse {
    userAgent:         string;
    environment:       Environment;
    lighthouseVersion: string;
    fetchTime:         Date;
    requestedUrl:      string;
    finalUrl:          string;
    runWarnings:       any[];
    audits:            Audits;
    configSettings:    ConfigSettings;
    categories:        Categories;
    categoryGroups:    CategoryGroups;
    timing:            Timing;
    i18n:              I18N;
    stackPacks:        any[];
}

export interface IOptionsRun {
    chromeFlags: ChromeFlags[];
    port?: number;
}

export interface Audits {
    "is-on-https":                        BeijingPigeon;
    "redirects-http":                     PuneHedgehog;
    "service-worker":                     TrapaniSnowLeopard;
    "works-offline":                      TrapaniSnowLeopard;
    viewport:                             TrapaniSnowLeopard;
    "without-javascript":                 TrapaniSnowLeopard;
    "first-contentful-paint":             TrapaniSnowLeopard;
    "first-meaningful-paint":             TrapaniSnowLeopard;
    "load-fast-enough-for-pwa":           TrapaniSnowLeopard;
    "speed-index":                        TrapaniSnowLeopard;
    "screenshot-thumbnails":              BeijingPigeon;
    "final-screenshot":                   PuneHedgehog;
    "estimated-input-latency":            BeijingPigeon;
    "total-blocking-time":                PuneHedgehog;
    "max-potential-fid":                  PuneHedgehog;
    "errors-in-console":                  PuneHedgehog;
    "time-to-first-byte":                 PuneHedgehog;
    "first-cpu-idle":                     TrapaniSnowLeopard;
    interactive:                          EfficientAnimatedContent;
    "user-timings":                       PuneHedgehog;
    "critical-request-chains":            TrapaniSnowLeopard;
    redirects:                            PuneHedgehog;
    "installable-manifest":               PuneHedgehog;
    "apple-touch-icon":                   PuneHedgehog;
    "splash-screen":                      TrapaniSnowLeopard;
    "themed-omnibox":                     TrapaniSnowLeopard;
    "content-width":                      PuneHedgehog;
    "image-aspect-ratio":                 BeijingPigeon;
    deprecations:                         PuneHedgehog;
    "mainthread-work-breakdown":          PuneHedgehog;
    "bootup-time":                        BeijingPigeon;
    "uses-rel-preload":                   TrapaniSnowLeopard;
    "uses-rel-preconnect":                BeijingPigeon;
    "font-display":                       PuneHedgehog;
    diagnostics:                          PuneHedgehog;
    "network-requests":                   TrapaniSnowLeopard;
    "network-rtt":                        TrapaniSnowLeopard;
    "network-server-latency":             BeijingPigeon;
    "main-thread-tasks":                  PuneHedgehog;
    metrics:                              EfficientAnimatedContent;
    "offline-start-url":                  PuneHedgehog;
    "performance-budget":                 PuneHedgehog;
    "resource-summary":                   EfficientAnimatedContent;
    "third-party-summary":                PuneHedgehog;
    "pwa-cross-browser":                  PuneHedgehog;
    "pwa-page-transitions":               PuneHedgehog;
    "pwa-each-page-has-url":              PuneHedgehog;
    accesskeys:                           PuneHedgehog;
    "aria-allowed-attr":                  PuneHedgehog;
    "aria-required-attr":                 PuneHedgehog;
    "aria-required-children":             PuneHedgehog;
    "aria-required-parent":               PuneHedgehog;
    "aria-roles":                         PuneHedgehog;
    "aria-valid-attr-value":              PuneHedgehog;
    "aria-valid-attr":                    PuneHedgehog;
    "audio-caption":                      PuneHedgehog;
    "button-name":                        PuneHedgehog;
    bypass:                               PuneHedgehog;
    "color-contrast":                     PuneHedgehog;
    "definition-list":                    PuneHedgehog;
    dlitem:                               PuneHedgehog;
    "document-title":                     PuneHedgehog;
    "duplicate-id":                       PuneHedgehog;
    "frame-title":                        PuneHedgehog;
    "html-has-lang":                      BeijingPigeon;
    "html-lang-valid":                    BeijingPigeon;
    "image-alt":                          BeijingPigeon;
    "input-image-alt":                    BeijingPigeon;
    label:                                BeijingPigeon;
    "layout-table":                       BeijingPigeon;
    "link-name":                          BeijingPigeon;
    list:                                 PuneHedgehog;
    listitem:                             PuneHedgehog;
    "meta-refresh":                       PuneHedgehog;
    "meta-viewport":                      PuneHedgehog;
    "object-alt":                         PuneHedgehog;
    tabindex:                             TrapaniSnowLeopard;
    "td-headers-attr":                    TrapaniSnowLeopard;
    "th-has-data-cells":                  TrapaniSnowLeopard;
    "valid-lang":                         TrapaniSnowLeopard;
    "video-caption":                      TrapaniSnowLeopard;
    "video-description":                  TrapaniSnowLeopard;
    "custom-controls-labels":             PuneHedgehog;
    "custom-controls-roles":              PuneHedgehog;
    "focus-traps":                        PuneHedgehog;
    "focusable-controls":                 PuneHedgehog;
    "heading-levels":                     PuneHedgehog;
    "interactive-element-affordance":     BeijingPigeon;
    "logical-tab-order":                  PuneHedgehog;
    "managed-focus":                      PuneHedgehog;
    "offscreen-content-hidden":           PuneHedgehog;
    "use-landmarks":                      PuneHedgehog;
    "visual-order-follows-dom":           TrapaniSnowLeopard;
    "uses-long-cache-ttl":                EfficientAnimatedContent;
    "total-byte-weight":                  PuneHedgehog;
    "offscreen-images":                   PuneHedgehog;
    "render-blocking-resources":          PuneHedgehog;
    "unminified-css":                     PuneHedgehog;
    "unminified-javascript":              EfficientAnimatedContent;
    "unused-css-rules":                   EfficientAnimatedContent;
    "uses-webp-images":                   TrapaniSnowLeopard;
    "uses-optimized-images":              EfficientAnimatedContent;
    "uses-text-compression":              TrapaniSnowLeopard;
    "uses-responsive-images":             TrapaniSnowLeopard;
    "efficient-animated-content":         EfficientAnimatedContent;
    "appcache-manifest":                  PuneHedgehog;
    doctype:                              PuneHedgehog;
    "dom-size":                           PuneHedgehog;
    "external-anchors-use-rel-noopener":  PuneHedgehog;
    "geolocation-on-start":               PuneHedgehog;
    "no-document-write":                  PuneHedgehog;
    "no-vulnerable-libraries":            TrapaniSnowLeopard;
    "js-libraries":                       BeijingPigeon;
    "notification-on-start":              BeijingPigeon;
    "password-inputs-can-be-pasted-into": PuneHedgehog;
    "uses-http2":                         PuneHedgehog;
    "uses-passive-event-listeners":       BeijingPigeon;
    "meta-description":                   PuneHedgehog;
    "http-status-code":                   BeijingPigeon;
    "font-size":                          BeijingPigeon;
    "link-text":                          BeijingPigeon;
    "is-crawlable":                       BeijingPigeon;
    "robots-txt":                         TrapaniSnowLeopard;
    "tap-targets":                        TrapaniSnowLeopard;
    hreflang:                             PuneHedgehog;
    plugins:                              PuneHedgehog;
    canonical:                            PuneHedgehog;
    "structured-data":                    TrapaniSnowLeopard;
}

export interface PuneHedgehog {
    id:               string;
    title:            string;
    description:      string;
    score:            number | null;
    scoreDisplayMode: ScoreDisplayMode;
    warnings?:        any[];
    details?:         PurpleDetails;
    explanation?:     string;
    displayValue?:    string;
    numericValue?:    number;
}

export interface PurpleDetails {
    type:                 DebugDataType;
    headings?:            PurpleHeading[];
    items?:               PurpleItem[];
    debugData?:           DetailsDebugData;
    timing?:              number;
    timestamp?:           number;
    data?:                string;
    overallSavingsMs?:    number;
    overallSavingsBytes?: number;
    summary?:             PurpleSummary;
}

export interface DetailsDebugData {
    type:   DebugDataType;
    impact: string;
    tags:   string[];
}

export enum DebugDataType {
    Criticalrequestchain = "criticalrequestchain",
    Debugdata = "debugdata",
    Opportunity = "opportunity",
    Screenshot = "screenshot",
    Table = "table",
}

export interface PurpleHeading {
    key:          string;
    itemType?:    string;
    text?:        string;
    granularity?: Granularity;
    valueType?:   ValueType;
    label?:       string;
}

export type Granularity = number | number;

export enum ValueType {
    Bytes = "bytes",
    Thumbnail = "thumbnail",
    TimespanMS = "timespanMs",
    URL = "url",
}

export interface PurpleItem {
    node?:                     Node;
    numRequests?:              number;
    numScripts?:               number;
    numStylesheets?:           number;
    numFonts?:                 number;
    numTasks?:                 number;
    numTasksOver10ms?:         number;
    numTasksOver25ms?:         number;
    numTasksOver50ms?:         number;
    numTasksOver100ms?:        number;
    numTasksOver500ms?:        number;
    rtt?:                      number;
    throughput?:               number;
    maxRtt?:                   number;
    maxServerLatency?:         number;
    totalByteWeight?:          number;
    totalTaskTime?:            number;
    mainDocumentTransferSize?: number;
    statistic?:                string;
    element?:                  ElementUnion;
    value?:                    string;
    source?:                   string;
    description?:              string;
    url?:                      string;
    href?:                     string;
    target?:                   string;
    rel?:                      string;
    outerHTML?:                string;
    wastedMs?:                 number;
    failures?:                 string[];
    isParseFailure?:           boolean;
    parseFailureReason?:       string;
    duration?:                 number;
    startTime?:                number;
    group?:                    string;
    groupLabel?:               string;
    label?:                    string;
    requestStartTime?:         number;
    totalBytes?:               number;
    wastedBytes?:              number;
    wastedPercent?:            number;
    entity?:                   Entity;
    transferSize?:             number;
    mainThreadTime?:           number;
    blockingTime?:             number;
    name?:                     string;
    timingType?:               TimingType;
}

export type ElementUnion = ElementClass | string;

export interface ElementClass {
    type:  string;
    value: string;
}

export interface Entity {
    text: string;
    url:  string;
    type: EntityType;
}

export enum EntityType {
    Link = "link",
}

export interface Node {
    type:        Channel;
    selector:    string;
    path:        string;
    snippet:     string;
    explanation: string;
    nodeLabel:   string;
}

export enum Channel {
    Node = "node",
}

export enum TimingType {
    Mark = "Mark",
    Measure = "Measure",
}

export interface PurpleSummary {
    wastedBytes: number;
    wastedMs:    number;
}

export enum ScoreDisplayMode {
    Binary = "binary",
    Informative = "informative",
    Manual = "manual",
    NotApplicable = "notApplicable",
    Numeric = "numeric",
}

export interface BeijingPigeon {
    id:               string;
    title:            string;
    description:      string;
    score:            number | null;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue?:    number;
    displayValue?:    string;
    details?:         FluffyDetails;
    warnings?:        any[];
}

export interface FluffyDetails {
    type:              PurpleType;
    headings?:         PurpleHeading[];
    items:             FluffyItem[];
    summary?:          LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary;
    debugData?:        DetailsDebugData;
    scale?:            number;
    overallSavingsMs?: number;
}

export interface FluffyItem {
    url?:                string;
    total?:              number;
    scripting?:          number;
    scriptParseCompile?: number;
    source?:             string;
    selector?:           SelectorUnion;
    coverage?:           string;
    fontSize?:           string;
    node?:               Node;
    name?:               string;
    version?:            string;
    npm?:                string;
    origin?:             string;
    serverResponseTime?: number;
    timing?:             number;
    timestamp?:          number;
    data?:               string;
    label?:              string;
    wastedMs?:           number;
}

export type SelectorUnion = SelectorClass | string;

export interface SelectorClass {
    type:     Channel;
    selector: string;
    snippet:  string;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary {
    wastedMs?: number;
}

export enum PurpleType {
    Filmstrip = "filmstrip",
    Opportunity = "opportunity",
    Table = "table",
}

export interface TrapaniSnowLeopard {
    id:               string;
    title:            string;
    description:      string;
    score:            number | null;
    scoreDisplayMode: ScoreDisplayMode;
    displayValue?:    string;
    details?:         TentacledDetails;
    numericValue?:    number;
    explanation?:     string;
    warnings?:        string[];
}

export interface TentacledDetails {
    type:                 DebugDataType;
    chains?:              Chains;
    longestChain?:        LongestChain;
    headings?:            FluffyHeading[];
    items?:               TentacledItem[];
    summary?:             FluffySummary;
    overallSavingsMs?:    number;
    overallSavingsBytes?: number;
}

export interface Chains {
    "6E7131A81792E221ADA761AB22F27751": The6E7131A81792E221Ada761Ab22F27751;
}

export interface The6E7131A81792E221Ada761Ab22F27751 {
    request:  Request;
    children: The6E7131A81792E221ADA761AB22F27751Children;
}

export interface The6E7131A81792E221ADA761AB22F27751Children {
    "6E7131A81792E221ADA761AB22F27751:redirect": The6E7131A81792E221ADA761AB22F27751Redirect;
}

export interface The6E7131A81792E221ADA761AB22F27751Redirect {
    request:  Request;
    children: The6E7131A81792E221ADA761AB22F27751RedirectChildren;
}

export interface The6E7131A81792E221ADA761AB22F27751RedirectChildren {
    "8364.2":   ChiangMaiGoose;
    "8364.3":   ChiangMaiGoose;
    "8364.4":   ChiangMaiGoose;
    "8364.5":   The83645;
    "8364.6":   ChiangMaiGoose;
    "8364.7":   ChiangMaiGoose;
    "8364.8":   ChiangMaiGoose;
    "8364.73":  ChiangMaiGoose;
    "8364.203": ChiangMaiGoose;
    "8364.215": ChiangMaiGoose;
    "8364.179": ChiangMaiGoose;
    "8364.167": ChiangMaiGoose;
    "8364.209": ChiangMaiGoose;
    "8364.173": ChiangMaiGoose;
    "8364.176": ChiangMaiGoose;
    "8364.206": ChiangMaiGoose;
    "8364.180": ChiangMaiGoose;
    "8364.174": ChiangMaiGoose;
    "8364.168": ChiangMaiGoose;
    "8364.204": ChiangMaiGoose;
    "8364.216": ChiangMaiGoose;
    "8364.210": ChiangMaiGoose;
    "8364.177": ChiangMaiGoose;
    "8364.207": ChiangMaiGoose;
}

export interface ChiangMaiGoose {
    request: Request;
}

export interface Request {
    url:                  string;
    startTime:            number;
    endTime:              number;
    responseReceivedTime: number;
    transferSize:         number;
}

export interface The83645 {
    request:  Request;
    children: The83645_Children;
}

export interface The83645_Children {
    "8364.80": ChiangMaiGoose;
}

export interface FluffyHeading {
    key:          string;
    itemType?:    string;
    text?:        string;
    granularity?: number;
    displayUnit?: string;
    valueType?:   ValueType;
    label?:       string;
}

export interface TentacledItem {
    url?:                string;
    startTime?:          number;
    endTime?:            number;
    transferSize?:       number;
    resourceSize?:       number;
    statusCode?:         number;
    mimeType?:           string;
    resourceType?:       ResourceType;
    origin?:             string;
    rtt?:                number;
    highestSeverity?:    string;
    vulnCount?:          number;
    detectedLib?:        Entity;
    failures?:           string[];
    isParseFailure?:     boolean;
    parseFailureReason?: string;
    themeColor?:         null;
    fromProtocol?:       boolean;
    isCrossOrigin?:      boolean;
    totalBytes?:         number;
    wastedBytes?:        number;
}

export enum ResourceType {
    Document = "Document",
    Font = "Font",
    Image = "Image",
    Other = "Other",
    Script = "Script",
    Stylesheet = "Stylesheet",
    Xhr = "XHR",
}

export interface LongestChain {
    duration:     number;
    length:       number;
    transferSize: number;
}

export interface FluffySummary {
}

export interface EfficientAnimatedContent {
    id:               string;
    title:            string;
    description:      string;
    score:            number | null;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue?:    number;
    displayValue?:    string;
    details?:         EfficientAnimatedContentDetails;
    warnings?:        any[];
}

export interface EfficientAnimatedContentDetails {
    type:                 DebugDataType;
    headings?:            FluffyHeading[];
    items:                StickyItem[];
    overallSavingsMs?:    number;
    overallSavingsBytes?: number;
    summary?:             LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary;
}

export interface StickyItem {
    firstContentfulPaint?:             number;
    firstMeaningfulPaint?:             number;
    firstCPUIdle?:                     number;
    interactive?:                      number;
    speedIndex?:                       number;
    estimatedInputLatency?:            number;
    totalBlockingTime?:                number;
    observedNavigationStart?:          number;
    observedNavigationStartTs?:        number;
    observedFirstPaint?:               number;
    observedFirstPaintTs?:             number;
    observedFirstContentfulPaint?:     number;
    observedFirstContentfulPaintTs?:   number;
    observedFirstMeaningfulPaint?:     number;
    observedFirstMeaningfulPaintTs?:   number;
    observedLargestContentfulPaint?:   number;
    observedLargestContentfulPaintTs?: number;
    observedTraceEnd?:                 number;
    observedTraceEndTs?:               number;
    observedLoad?:                     number;
    observedLoadTs?:                   number;
    observedDomContentLoaded?:         number;
    observedDomContentLoadedTs?:       number;
    observedFirstVisualChange?:        number;
    observedFirstVisualChangeTs?:      number;
    observedLastVisualChange?:         number;
    observedLastVisualChangeTs?:       number;
    observedSpeedIndex?:               number;
    observedSpeedIndexTs?:             number;
    lcpInvalidated?:                   boolean;
    resourceType?:                     string;
    label?:                            string;
    requestCount?:                     number;
    size?:                             number;
    url?:                              string;
    totalBytes?:                       number;
    wastedBytes?:                      number;
    wastedPercent?:                    number;
    cacheLifetimeMs?:                  number;
    cacheHitProbability?:              number;
    debugData?:                        ItemDebugData;
}

export interface ItemDebugData {
    type:        DebugDataType;
    public?:     boolean;
    "max-age":   number;
    "s-maxage"?: string;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary {
    wastedBytes: number;
}

export interface Categories {
    performance:      Performance;
    accessibility:    Accessibility;
    "best-practices": BestPractices;
    seo:              Accessibility;
    pwa:              Accessibility;
}

export interface Accessibility {
    title:             string;
    description:       string;
    manualDescription: string;
    auditRefs:         AccessibilityAuditRef[];
    id:                string;
    score:             number;
}

export interface AccessibilityAuditRef {
    id:     string;
    weight: number;
    group?: string;
}

export interface BestPractices {
    title:     string;
    auditRefs: BestPracticesAuditRef[];
    id:        string;
    score:     number;
}

export interface BestPracticesAuditRef {
    id:     string;
    weight: number;
}

export interface Performance {
    title:     string;
    auditRefs: AccessibilityAuditRef[];
    id:        string;
    score:     number;
}

export interface CategoryGroups {
    metrics:               Metrics;
    "load-opportunities":  A11YAria;
    budgets:               A11YAria;
    diagnostics:           A11YAria;
    "pwa-fast-reliable":   Metrics;
    "pwa-installable":     Metrics;
    "pwa-optimized":       Metrics;
    "a11y-best-practices": A11YAria;
    "a11y-color-contrast": A11YAria;
    "a11y-names-labels":   A11YAria;
    "a11y-navigation":     A11YAria;
    "a11y-aria":           A11YAria;
    "a11y-language":       A11YAria;
    "a11y-audio-video":    A11YAria;
    "a11y-tables-lists":   A11YAria;
    "seo-mobile":          A11YAria;
    "seo-content":         A11YAria;
    "seo-crawl":           A11YAria;
}

export interface A11YAria {
    title:       string;
    description: string;
}

export interface Metrics {
    title: string;
}

export interface ConfigSettings {
    output:                    string;
    maxWaitForFcp:             number;
    maxWaitForLoad:            number;
    throttlingMethod:          string;
    throttling:                Throttling;
    auditMode:                 boolean;
    gatherMode:                boolean;
    disableStorageReset:       boolean;
    emulatedFormFactor:        string;
    channel:                   Channel;
    budgets:                   null;
    locale:                    string;
    blockedUrlPatterns:        null;
    additionalTraceCategories: null;
    extraHeaders:              null;
    precomputedLanternData:    null;
    onlyAudits:                null;
    onlyCategories:            null;
    skipAudits:                null;
}

export interface Throttling {
    rttMs:                  number;
    throughputKbps:         number;
    requestLatencyMs:       number;
    downloadThroughputKbps: number;
    uploadThroughputKbps:   number;
    cpuSlowdownMultiplier:  number;
}

export interface Environment {
    networkUserAgent: string;
    hostUserAgent:    string;
    benchmarkIndex:   number;
}

export interface I18N {
    rendererFormattedStrings: RendererFormattedStrings;
    icuMessagePaths:          IcuMessagePaths;
}

export interface IcuMessagePaths {
    "lighthouse-core/audits/is-on-https.js | title":                                          string[];
    "lighthouse-core/audits/is-on-https.js | description":                                    string[];
    "lighthouse-core/audits/redirects-http.js | title":                                       string[];
    "lighthouse-core/audits/redirects-http.js | description":                                 string[];
    "lighthouse-core/audits/service-worker.js | failureTitle":                                string[];
    "lighthouse-core/audits/service-worker.js | description":                                 string[];
    "lighthouse-core/audits/works-offline.js | failureTitle":                                 string[];
    "lighthouse-core/audits/works-offline.js | description":                                  string[];
    "lighthouse-core/audits/works-offline.js | warningNoLoad":                                LighthouseCoreAuditsWorksOfflineJSWarningNoLoad[];
    "lighthouse-core/audits/viewport.js | title":                                             string[];
    "lighthouse-core/audits/viewport.js | description":                                       string[];
    "lighthouse-core/audits/without-javascript.js | title":                                   string[];
    "lighthouse-core/audits/without-javascript.js | description":                             string[];
    "lighthouse-core/audits/metrics/first-contentful-paint.js | title":                       string[];
    "lighthouse-core/audits/metrics/first-contentful-paint.js | description":                 string[];
    "lighthouse-core/lib/i18n/i18n.js | seconds":                                             LighthouseCore[];
    "lighthouse-core/audits/metrics/first-meaningful-paint.js | title":                       string[];
    "lighthouse-core/audits/metrics/first-meaningful-paint.js | description":                 string[];
    "lighthouse-core/audits/load-fast-enough-for-pwa.js | failureTitle":                      string[];
    "lighthouse-core/audits/load-fast-enough-for-pwa.js | description":                       string[];
    "lighthouse-core/audits/load-fast-enough-for-pwa.js | displayValueText":                  LighthouseCore[];
    "lighthouse-core/audits/load-fast-enough-for-pwa.js | explanationLoadSlow":               string[];
    "lighthouse-core/audits/metrics/speed-index.js | title":                                  string[];
    "lighthouse-core/audits/metrics/speed-index.js | description":                            string[];
    "lighthouse-core/audits/metrics/estimated-input-latency.js | title":                      string[];
    "lighthouse-core/audits/metrics/estimated-input-latency.js | description":                string[];
    "lighthouse-core/lib/i18n/i18n.js | ms":                                                  LighthouseCore[];
    "lighthouse-core/audits/metrics/total-blocking-time.js | title":                          string[];
    "lighthouse-core/audits/metrics/total-blocking-time.js | description":                    string[];
    "lighthouse-core/audits/metrics/max-potential-fid.js | title":                            string[];
    "lighthouse-core/audits/metrics/max-potential-fid.js | description":                      string[];
    "lighthouse-core/audits/errors-in-console.js | failureTitle":                             string[];
    "lighthouse-core/audits/errors-in-console.js | description":                              string[];
    "lighthouse-core/lib/i18n/i18n.js | columnURL":                                           string[];
    "lighthouse-core/audits/errors-in-console.js | columnDesc":                               string[];
    "lighthouse-core/audits/time-to-first-byte.js | title":                                   string[];
    "lighthouse-core/audits/time-to-first-byte.js | description":                             string[];
    "lighthouse-core/audits/time-to-first-byte.js | displayValue":                            LighthouseCore[];
    "lighthouse-core/audits/metrics/first-cpu-idle.js | title":                               string[];
    "lighthouse-core/audits/metrics/first-cpu-idle.js | description":                         string[];
    "lighthouse-core/audits/metrics/interactive.js | title":                                  string[];
    "lighthouse-core/audits/metrics/interactive.js | description":                            string[];
    "lighthouse-core/audits/user-timings.js | title":                                         string[];
    "lighthouse-core/audits/user-timings.js | description":                                   string[];
    "lighthouse-core/audits/user-timings.js | displayValue":                                  LighthouseCoreAuditsJSDisplayValue[];
    "lighthouse-core/lib/i18n/i18n.js | columnName":                                          string[];
    "lighthouse-core/audits/user-timings.js | columnType":                                    string[];
    "lighthouse-core/audits/user-timings.js | columnStartTime":                               string[];
    "lighthouse-core/audits/user-timings.js | columnDuration":                                string[];
    "lighthouse-core/audits/critical-request-chains.js | title":                              string[];
    "lighthouse-core/audits/critical-request-chains.js | description":                        string[];
    "lighthouse-core/audits/critical-request-chains.js | displayValue":                       LighthouseCoreAuditsJSDisplayValue[];
    "lighthouse-core/audits/redirects.js | title":                                            string[];
    "lighthouse-core/audits/redirects.js | description":                                      string[];
    "lighthouse-core/lib/i18n/i18n.js | displayValueMsSavings":                               LighthouseCoreLIBI18NI18NJSDisplayValueMSSaving[];
    "lighthouse-core/lib/i18n/i18n.js | columnTimeSpent":                                     string[];
    "lighthouse-core/audits/installable-manifest.js | failureTitle":                          string[];
    "lighthouse-core/audits/installable-manifest.js | description":                           string[];
    "lighthouse-core/audits/apple-touch-icon.js | title":                                     string[];
    "lighthouse-core/audits/apple-touch-icon.js | description":                               string[];
    "lighthouse-core/audits/splash-screen.js | failureTitle":                                 string[];
    "lighthouse-core/audits/splash-screen.js | description":                                  string[];
    "lighthouse-core/audits/themed-omnibox.js | failureTitle":                                string[];
    "lighthouse-core/audits/themed-omnibox.js | description":                                 string[];
    "lighthouse-core/audits/content-width.js | title":                                        string[];
    "lighthouse-core/audits/content-width.js | description":                                  string[];
    "lighthouse-core/audits/image-aspect-ratio.js | title":                                   string[];
    "lighthouse-core/audits/image-aspect-ratio.js | description":                             string[];
    "lighthouse-core/audits/deprecations.js | title":                                         string[];
    "lighthouse-core/audits/deprecations.js | description":                                   string[];
    "lighthouse-core/audits/mainthread-work-breakdown.js | failureTitle":                     string[];
    "lighthouse-core/audits/mainthread-work-breakdown.js | description":                      string[];
    "lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory":                   string[];
    "lighthouse-core/audits/bootup-time.js | failureTitle":                                   string[];
    "lighthouse-core/audits/bootup-time.js | description":                                    string[];
    "lighthouse-core/audits/bootup-time.js | columnTotal":                                    string[];
    "lighthouse-core/audits/bootup-time.js | columnScriptEval":                               string[];
    "lighthouse-core/audits/bootup-time.js | columnScriptParse":                              string[];
    "lighthouse-core/audits/uses-rel-preload.js | title":                                     string[];
    "lighthouse-core/audits/uses-rel-preload.js | description":                               string[];
    "lighthouse-core/audits/uses-rel-preconnect.js | title":                                  string[];
    "lighthouse-core/audits/uses-rel-preconnect.js | description":                            string[];
    "lighthouse-core/lib/i18n/i18n.js | columnWastedBytes":                                   string[];
    "lighthouse-core/audits/font-display.js | failureTitle":                                  string[];
    "lighthouse-core/audits/font-display.js | description":                                   string[];
    "lighthouse-core/audits/network-rtt.js | title":                                          string[];
    "lighthouse-core/audits/network-rtt.js | description":                                    string[];
    "lighthouse-core/audits/network-server-latency.js | title":                               string[];
    "lighthouse-core/audits/network-server-latency.js | description":                         string[];
    "lighthouse-core/audits/offline-start-url.js | failureTitle":                             string[];
    "lighthouse-core/audits/offline-start-url.js | description":                              string[];
    "lighthouse-core/audits/performance-budget.js | title":                                   string[];
    "lighthouse-core/audits/performance-budget.js | description":                             string[];
    "lighthouse-core/audits/resource-summary.js | title":                                     string[];
    "lighthouse-core/audits/resource-summary.js | description":                               string[];
    "lighthouse-core/audits/resource-summary.js | displayValue":                              LighthouseCoreAuditsResourceSummaryJSDisplayValue[];
    "lighthouse-core/lib/i18n/i18n.js | columnResourceType":                                  string[];
    "lighthouse-core/lib/i18n/i18n.js | columnRequests":                                      string[];
    "lighthouse-core/lib/i18n/i18n.js | columnTransferSize":                                  string[];
    "lighthouse-core/lib/i18n/i18n.js | totalResourceType":                                   string[];
    "lighthouse-core/lib/i18n/i18n.js | scriptResourceType":                                  string[];
    "lighthouse-core/lib/i18n/i18n.js | fontResourceType":                                    string[];
    "lighthouse-core/lib/i18n/i18n.js | imageResourceType":                                   string[];
    "lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType":                              string[];
    "lighthouse-core/lib/i18n/i18n.js | documentResourceType":                                string[];
    "lighthouse-core/lib/i18n/i18n.js | otherResourceType":                                   string[];
    "lighthouse-core/lib/i18n/i18n.js | mediaResourceType":                                   string[];
    "lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType":                              string[];
    "lighthouse-core/audits/third-party-summary.js | failureTitle":                           string[];
    "lighthouse-core/audits/third-party-summary.js | description":                            string[];
    "lighthouse-core/audits/third-party-summary.js | displayValue":                           LighthouseCore[];
    "lighthouse-core/audits/third-party-summary.js | columnThirdParty":                       string[];
    "lighthouse-core/lib/i18n/i18n.js | columnSize":                                          string[];
    "lighthouse-core/audits/third-party-summary.js | columnBlockingTime":                     string[];
    "lighthouse-core/audits/manual/pwa-cross-browser.js | title":                             string[];
    "lighthouse-core/audits/manual/pwa-cross-browser.js | description":                       string[];
    "lighthouse-core/audits/manual/pwa-page-transitions.js | title":                          string[];
    "lighthouse-core/audits/manual/pwa-page-transitions.js | description":                    string[];
    "lighthouse-core/audits/manual/pwa-each-page-has-url.js | title":                         string[];
    "lighthouse-core/audits/manual/pwa-each-page-has-url.js | description":                   string[];
    "lighthouse-core/audits/accessibility/accesskeys.js | title":                             string[];
    "lighthouse-core/audits/accessibility/accesskeys.js | description":                       string[];
    "lighthouse-core/audits/accessibility/aria-allowed-attr.js | title":                      string[];
    "lighthouse-core/audits/accessibility/aria-allowed-attr.js | description":                string[];
    "lighthouse-core/audits/accessibility/aria-required-attr.js | title":                     string[];
    "lighthouse-core/audits/accessibility/aria-required-attr.js | description":               string[];
    "lighthouse-core/audits/accessibility/aria-required-children.js | title":                 string[];
    "lighthouse-core/audits/accessibility/aria-required-children.js | description":           string[];
    "lighthouse-core/audits/accessibility/aria-required-parent.js | title":                   string[];
    "lighthouse-core/audits/accessibility/aria-required-parent.js | description":             string[];
    "lighthouse-core/audits/accessibility/aria-roles.js | title":                             string[];
    "lighthouse-core/audits/accessibility/aria-roles.js | description":                       string[];
    "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title":                  string[];
    "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description":            string[];
    "lighthouse-core/audits/accessibility/aria-valid-attr.js | title":                        string[];
    "lighthouse-core/audits/accessibility/aria-valid-attr.js | description":                  string[];
    "lighthouse-core/audits/accessibility/audio-caption.js | title":                          string[];
    "lighthouse-core/audits/accessibility/audio-caption.js | description":                    string[];
    "lighthouse-core/audits/accessibility/button-name.js | failureTitle":                     string[];
    "lighthouse-core/audits/accessibility/button-name.js | description":                      string[];
    "lighthouse-core/audits/accessibility/axe-audit.js | failingElementsHeader":              string[];
    "lighthouse-core/audits/accessibility/bypass.js | title":                                 string[];
    "lighthouse-core/audits/accessibility/bypass.js | description":                           string[];
    "lighthouse-core/audits/accessibility/color-contrast.js | failureTitle":                  string[];
    "lighthouse-core/audits/accessibility/color-contrast.js | description":                   string[];
    "lighthouse-core/audits/accessibility/definition-list.js | title":                        string[];
    "lighthouse-core/audits/accessibility/definition-list.js | description":                  string[];
    "lighthouse-core/audits/accessibility/dlitem.js | title":                                 string[];
    "lighthouse-core/audits/accessibility/dlitem.js | description":                           string[];
    "lighthouse-core/audits/accessibility/document-title.js | title":                         string[];
    "lighthouse-core/audits/accessibility/document-title.js | description":                   string[];
    "lighthouse-core/audits/accessibility/duplicate-id.js | title":                           string[];
    "lighthouse-core/audits/accessibility/duplicate-id.js | description":                     string[];
    "lighthouse-core/audits/accessibility/frame-title.js | title":                            string[];
    "lighthouse-core/audits/accessibility/frame-title.js | description":                      string[];
    "lighthouse-core/audits/accessibility/html-has-lang.js | title":                          string[];
    "lighthouse-core/audits/accessibility/html-has-lang.js | description":                    string[];
    "lighthouse-core/audits/accessibility/html-lang-valid.js | title":                        string[];
    "lighthouse-core/audits/accessibility/html-lang-valid.js | description":                  string[];
    "lighthouse-core/audits/accessibility/image-alt.js | failureTitle":                       string[];
    "lighthouse-core/audits/accessibility/image-alt.js | description":                        string[];
    "lighthouse-core/audits/accessibility/input-image-alt.js | title":                        string[];
    "lighthouse-core/audits/accessibility/input-image-alt.js | description":                  string[];
    "lighthouse-core/audits/accessibility/label.js | failureTitle":                           string[];
    "lighthouse-core/audits/accessibility/label.js | description":                            string[];
    "lighthouse-core/audits/accessibility/layout-table.js | title":                           string[];
    "lighthouse-core/audits/accessibility/layout-table.js | description":                     string[];
    "lighthouse-core/audits/accessibility/link-name.js | failureTitle":                       string[];
    "lighthouse-core/audits/accessibility/link-name.js | description":                        string[];
    "lighthouse-core/audits/accessibility/list.js | title":                                   string[];
    "lighthouse-core/audits/accessibility/list.js | description":                             string[];
    "lighthouse-core/audits/accessibility/listitem.js | title":                               string[];
    "lighthouse-core/audits/accessibility/listitem.js | description":                         string[];
    "lighthouse-core/audits/accessibility/meta-refresh.js | title":                           string[];
    "lighthouse-core/audits/accessibility/meta-refresh.js | description":                     string[];
    "lighthouse-core/audits/accessibility/meta-viewport.js | title":                          string[];
    "lighthouse-core/audits/accessibility/meta-viewport.js | description":                    string[];
    "lighthouse-core/audits/accessibility/object-alt.js | title":                             string[];
    "lighthouse-core/audits/accessibility/object-alt.js | description":                       string[];
    "lighthouse-core/audits/accessibility/tabindex.js | title":                               string[];
    "lighthouse-core/audits/accessibility/tabindex.js | description":                         string[];
    "lighthouse-core/audits/accessibility/td-headers-attr.js | title":                        string[];
    "lighthouse-core/audits/accessibility/td-headers-attr.js | description":                  string[];
    "lighthouse-core/audits/accessibility/th-has-data-cells.js | title":                      string[];
    "lighthouse-core/audits/accessibility/th-has-data-cells.js | description":                string[];
    "lighthouse-core/audits/accessibility/valid-lang.js | title":                             string[];
    "lighthouse-core/audits/accessibility/valid-lang.js | description":                       string[];
    "lighthouse-core/audits/accessibility/video-caption.js | title":                          string[];
    "lighthouse-core/audits/accessibility/video-caption.js | description":                    string[];
    "lighthouse-core/audits/accessibility/video-description.js | title":                      string[];
    "lighthouse-core/audits/accessibility/video-description.js | description":                string[];
    "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | failureTitle":           string[];
    "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description":            string[];
    "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue":           LighthouseCoreAuditsJSDisplayValue[];
    "lighthouse-core/lib/i18n/i18n.js | columnCacheTTL":                                      string[];
    "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | failureTitle":             string[];
    "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description":              string[];
    "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue":             LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue[];
    "lighthouse-core/audits/byte-efficiency/offscreen-images.js | title":                     string[];
    "lighthouse-core/audits/byte-efficiency/offscreen-images.js | description":               string[];
    "lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings":                             LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving[];
    "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title":            string[];
    "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description":      string[];
    "lighthouse-core/audits/byte-efficiency/unminified-css.js | title":                       string[];
    "lighthouse-core/audits/byte-efficiency/unminified-css.js | description":                 string[];
    "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title":                string[];
    "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description":          string[];
    "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title":                     string[];
    "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description":               string[];
    "lighthouse-core/audits/byte-efficiency/uses-webp-images.js | title":                     string[];
    "lighthouse-core/audits/byte-efficiency/uses-webp-images.js | description":               string[];
    "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title":                string[];
    "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description":          string[];
    "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title":                string[];
    "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description":          string[];
    "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title":               string[];
    "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description":         string[];
    "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title":           string[];
    "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description":     string[];
    "lighthouse-core/audits/dobetterweb/appcache-manifest.js | title":                        string[];
    "lighthouse-core/audits/dobetterweb/appcache-manifest.js | description":                  string[];
    "lighthouse-core/audits/dobetterweb/doctype.js | title":                                  string[];
    "lighthouse-core/audits/dobetterweb/doctype.js | description":                            string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | failureTitle":                          string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | description":                           string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | displayValue":                          LighthouseCoreAuditsJSDisplayValue[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic":                       string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | columnElement":                         string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | columnValue":                           string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements":                  string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth":                     string[];
    "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth":                     string[];
    "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | failureTitle": string[];
    "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | description":  string[];
    "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | columnTarget": string[];
    "lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | columnRel":    string[];
    "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | title":                     string[];
    "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | description":               string[];
    "lighthouse-core/audits/dobetterweb/no-document-write.js | failureTitle":                 string[];
    "lighthouse-core/audits/dobetterweb/no-document-write.js | description":                  string[];
    "lighthouse-core/lib/i18n/i18n.js | columnLocation":                                      string[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | failureTitle":           string[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description":            string[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | displayValue":           LighthouseCoreAuditsJSDisplayValue[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVersion":          string[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVuln":             string[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnSeverity":         string[];
    "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | rowSeverityMedium":      string[];
    "lighthouse-core/audits/dobetterweb/js-libraries.js | title":                             string[];
    "lighthouse-core/audits/dobetterweb/js-libraries.js | description":                       string[];
    "lighthouse-core/audits/dobetterweb/js-libraries.js | columnVersion":                     string[];
    "lighthouse-core/audits/dobetterweb/notification-on-start.js | title":                    string[];
    "lighthouse-core/audits/dobetterweb/notification-on-start.js | description":              string[];
    "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | title":       string[];
    "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | description": string[];
    "lighthouse-core/audits/dobetterweb/uses-http2.js | title":                               string[];
    "lighthouse-core/audits/dobetterweb/uses-http2.js | description":                         string[];
    "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | failureTitle":      string[];
    "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description":       string[];
    "lighthouse-core/audits/seo/meta-description.js | title":                                 string[];
    "lighthouse-core/audits/seo/meta-description.js | description":                           string[];
    "lighthouse-core/audits/seo/http-status-code.js | title":                                 string[];
    "lighthouse-core/audits/seo/http-status-code.js | description":                           string[];
    "lighthouse-core/audits/seo/font-size.js | title":                                        string[];
    "lighthouse-core/audits/seo/font-size.js | description":                                  string[];
    "lighthouse-core/audits/seo/font-size.js | displayValue":                                 LighthouseCoreAuditsSEOJSDisplayValue[];
    "lighthouse-core/audits/seo/link-text.js | title":                                        string[];
    "lighthouse-core/audits/seo/link-text.js | description":                                  string[];
    "lighthouse-core/audits/seo/is-crawlable.js | title":                                     string[];
    "lighthouse-core/audits/seo/is-crawlable.js | description":                               string[];
    "lighthouse-core/audits/seo/robots-txt.js | title":                                       string[];
    "lighthouse-core/audits/seo/robots-txt.js | description":                                 string[];
    "lighthouse-core/audits/seo/tap-targets.js | title":                                      string[];
    "lighthouse-core/audits/seo/tap-targets.js | description":                                string[];
    "lighthouse-core/audits/seo/tap-targets.js | displayValue":                               LighthouseCoreAuditsSEOJSDisplayValue[];
    "lighthouse-core/audits/seo/hreflang.js | title":                                         string[];
    "lighthouse-core/audits/seo/hreflang.js | description":                                   string[];
    "lighthouse-core/audits/seo/plugins.js | title":                                          string[];
    "lighthouse-core/audits/seo/plugins.js | description":                                    string[];
    "lighthouse-core/audits/seo/canonical.js | title":                                        string[];
    "lighthouse-core/audits/seo/canonical.js | description":                                  string[];
    "lighthouse-core/audits/seo/manual/structured-data.js | title":                           string[];
    "lighthouse-core/audits/seo/manual/structured-data.js | description":                     string[];
    "lighthouse-core/config/default-config.js | performanceCategoryTitle":                    string[];
    "lighthouse-core/config/default-config.js | a11yCategoryTitle":                           string[];
    "lighthouse-core/config/default-config.js | a11yCategoryDescription":                     string[];
    "lighthouse-core/config/default-config.js | a11yCategoryManualDescription":               string[];
    "lighthouse-core/config/default-config.js | bestPracticesCategoryTitle":                  string[];
    "lighthouse-core/config/default-config.js | seoCategoryTitle":                            string[];
    "lighthouse-core/config/default-config.js | seoCategoryDescription":                      string[];
    "lighthouse-core/config/default-config.js | seoCategoryManualDescription":                string[];
    "lighthouse-core/config/default-config.js | pwaCategoryTitle":                            string[];
    "lighthouse-core/config/default-config.js | pwaCategoryDescription":                      string[];
    "lighthouse-core/config/default-config.js | pwaCategoryManualDescription":                string[];
    "lighthouse-core/config/default-config.js | metricGroupTitle":                            string[];
    "lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle":                 string[];
    "lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription":           string[];
    "lighthouse-core/config/default-config.js | budgetsGroupTitle":                           string[];
    "lighthouse-core/config/default-config.js | budgetsGroupDescription":                     string[];
    "lighthouse-core/config/default-config.js | diagnosticsGroupTitle":                       string[];
    "lighthouse-core/config/default-config.js | diagnosticsGroupDescription":                 string[];
    "lighthouse-core/config/default-config.js | pwaFastReliableGroupTitle":                   string[];
    "lighthouse-core/config/default-config.js | pwaInstallableGroupTitle":                    string[];
    "lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle":                      string[];
    "lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle":                 string[];
    "lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription":           string[];
    "lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle":                 string[];
    "lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription":           string[];
    "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle":                   string[];
    "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription":             string[];
    "lighthouse-core/config/default-config.js | a11yNavigationGroupTitle":                    string[];
    "lighthouse-core/config/default-config.js | a11yNavigationGroupDescription":              string[];
    "lighthouse-core/config/default-config.js | a11yAriaGroupTitle":                          string[];
    "lighthouse-core/config/default-config.js | a11yAriaGroupDescription":                    string[];
    "lighthouse-core/config/default-config.js | a11yLanguageGroupTitle":                      string[];
    "lighthouse-core/config/default-config.js | a11yLanguageGroupDescription":                string[];
    "lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle":                    string[];
    "lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription":              string[];
    "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle":              string[];
    "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription":        string[];
    "lighthouse-core/config/default-config.js | seoMobileGroupTitle":                         string[];
    "lighthouse-core/config/default-config.js | seoMobileGroupDescription":                   string[];
    "lighthouse-core/config/default-config.js | seoContentGroupTitle":                        string[];
    "lighthouse-core/config/default-config.js | seoContentGroupDescription":                  string[];
    "lighthouse-core/config/default-config.js | seoCrawlingGroupTitle":                       string[];
    "lighthouse-core/config/default-config.js | seoCrawlingGroupDescription":                 string[];
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValue {
    values: LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues;
    path:   string;
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJSDisplayValueValues {
    totalBytes: number;
}

export interface LighthouseCoreAuditsJSDisplayValue {
    values: LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues;
    path:   string;
}

export interface LighthouseCoreAuditsByteEfficiencyUsesLongCacheTTLJSDisplayValueValues {
    itemCount: number;
}

export interface LighthouseCore {
    values: LighthouseCoreAuditsLoadFastEnoughForPwaJSDisplayValueTextValues;
    path:   string;
}

export interface LighthouseCoreAuditsLoadFastEnoughForPwaJSDisplayValueTextValues {
    timeInMs: number;
}

export interface LighthouseCoreAuditsResourceSummaryJSDisplayValue {
    values: LighthouseCoreAuditsResourceSummaryJSDisplayValueValues;
    path:   string;
}

export interface LighthouseCoreAuditsResourceSummaryJSDisplayValueValues {
    requestCount: number;
    byteCount:    number;
}

export interface LighthouseCoreAuditsSEOJSDisplayValue {
    values: LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues;
    path:   string;
}

export interface LighthouseCoreAuditsSEOFontSizeJSDisplayValueValues {
    decimalProportion: number;
}

export interface LighthouseCoreAuditsWorksOfflineJSWarningNoLoad {
    values: LighthouseCoreAuditsWorksOfflineJSWarningNoLoadValues;
    path:   string;
}

export interface LighthouseCoreAuditsWorksOfflineJSWarningNoLoadValues {
    requested: string;
    final:     string;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueByteSaving {
    values: LighthouseCoreLIBI18NI18NJSDisplayValueByteSavingSummary;
    path:   string;
}

export interface LighthouseCoreLIBI18NI18NJSDisplayValueMSSaving {
    values: LighthouseCoreLIBI18NI18NJSDisplayValueMSSavingSummary;
    path:   string;
}

export interface RendererFormattedStrings {
    auditGroupExpandTooltip:          string;
    crcInitialNavigation:             string;
    crcLongestDurationLabel:          string;
    errorLabel:                       string;
    errorMissingAuditInfo:            string;
    labDataTitle:                     string;
    lsPerformanceCategoryDescription: string;
    manualAuditsGroupTitle:           string;
    notApplicableAuditsGroupTitle:    string;
    opportunityResourceColumnLabel:   string;
    opportunitySavingsColumnLabel:    string;
    passedAuditsGroupTitle:           string;
    snippetCollapseButtonLabel:       string;
    snippetExpandButtonLabel:         string;
    thirdPartyResourcesLabel:         string;
    toplevelWarningsMessage:          string;
    varianceDisclaimer:               string;
    warningAuditsGroupTitle:          string;
    warningHeader:                    string;
}

export interface Timing {
    entries: Entry[];
    total:   number;
}

export interface Entry {
    name:        string;
    startTime:   number;
    duration?:   number;
    timingType?: TimingType;
    entryType?:  EntryType;
}

export enum EntryType {
    Measure = "measure",
}
