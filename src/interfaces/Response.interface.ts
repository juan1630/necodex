export interface Weather {
    meta: Meta;
    results?: (ResultsEntity)[] | null;
    group_by?: (null)[] | null;
  }
  export interface Meta {
    count: number;
    db_response_time_ms: number;
    page: number;
    per_page: number;
  }
  export interface ResultsEntity {
    id?: string;
    orcid?: null;
    display_name?: string;
    display_name_alternatives?: (null)[] | null;
    relevance_score?: number | null;
    works_count?: number;
    cited_by_count?: number;
    summary_stats?: SummaryStats;
    ids?: Ids;
    last_known_institution?: LastKnownInstitution | null;
    x_concepts?: (XConceptsEntity)[] | null;
    counts_by_year?: (CountsByYearEntity | null)[] | null;
    works_api_url?: string;
    updated_date?: string;
    created_date?: string;
  }
  export interface SummaryStats {
    h_index: number;
    i10_index: number;
  }
  export interface Ids {
    openalex: string;
    mag?: string | null;
  }
  export interface LastKnownInstitution {
    id: string;
    ror: string;
    display_name: string;
    country_code: string;
    type: string;
  }
  export interface XConceptsEntity {
    id: string;
    wikidata: string;
    display_name: string;
    level: number;
    score: number;
  }
  export interface CountsByYearEntity {
    year: number;
    works_count: number;
    cited_by_count: number;
  }
  